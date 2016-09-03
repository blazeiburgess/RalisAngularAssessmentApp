class EntitiesController < ApplicationController
  def index
    @entities = Entity.all
    render json: @entities
  end

  def show
    @entity = Entity.find(params[:id])
    render json: @entity
  end

  def create
    byebug
    entity = Entity.new(name: "ghost", description: "none")
    if entity.save
      render json: entity, status: 201
    else
      render json: {status: 404}
    end
  end
end
