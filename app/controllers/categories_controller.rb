class CategoriesController < ApplicationController
  def index
    categories = Category.all.sort_by(&:name)
    render json: categories
    # render json: categories, each_serializer: SimpleCategorySerializer
  end

  def show
    category = Category.find(params[:id])
    render json: category
  end

  def search
    entities = []
    params[:search_terms].split(/-/).each do |search_term|
      if entities.count == 0
	entities += Category.all.select {|cat| cat.name.downcase.match(/#{search_term.downcase}/) }.map(&:entities).flatten.uniq.sort_by {|ent| ent.name.downcase }
      else
	entities = entities & Category.all.select {|cat| cat.name.downcase.match(/#{search_term.downcase}/) }.map(&:entities).flatten.uniq.sort_by {|ent| ent.name.downcase }
      end
    end
    render json: entities
  end

  def create
    category = Category.new(category_params)
    if category.save
      render json: category, status: 201
    else
      render json: {status: "Error creating category"}
    end
  end

  def destroy
    category = Category.find(params[:id])
    category.destroy
    render json: {result: "Category destroyed"}, status: 200
  end

  private
    def category_params
      params.require(:category).permit(:name)
    end
end
