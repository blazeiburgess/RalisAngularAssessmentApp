class EntityCategoriesController < ApplicationController
  def create
    entity_category = EntityCategory.new(entity_category_params)
    if entity_category.save
      render json: entity_category, status: 201
    else
      render json: {status: "Error creating entity_category"}
    end
  end

  private
    def entity_category_params
      params.require(:entity_category).permit(:entity_id, :category_id)
    end
end
