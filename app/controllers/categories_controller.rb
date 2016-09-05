class CategoriesController < ApplicationController
  def index
    categories = Category.all
    render json: categories
  end

  def show
    category = Category.find(params[:id])
    render json: category
  end

  def create
    category = Category.new(category_params)
    if category.save
      render json: category, status: 201
    else
      render json: {status: "Error creating category"}
    end
  end

  private
    def category_params
      params.require(:category).permit(:name)
    end
end
