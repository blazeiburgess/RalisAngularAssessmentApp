class EntitiesController < ApplicationController
  def index
    @entities = Entity.all.sort_by(&:name)
    render json: @entities
  end

  def show
    @entity = Entity.find(params[:id])
    render json: @entity
  end

  def create
    entity = Entity.new(entity_params)
    if entity.save
      render json: entity, status: 201
    else
      render json: {status: "Submission failed. Please try again"}
    end
  end

  def update
    entity = Entity.find(params[:id])
    if entity.update(entity_params)
      render json: entity, status: 200
    else
      render json: {status: "Failed to update entity"}
    end
  end

  def destroy
    entity = Entity.find(params[:id])
    entity.destroy
    render json: {result: "Entity destroyed"}, status: 200
  end

  private
    def entity_params
      params.require(:entity).permit(:name, :description)
    end
end
