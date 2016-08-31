class EntitiesController < ApplicationController
  def index
    @entities = Entity.all
    render json: @entities
  end

  def show
    @entity = Entity.find(params[:id])
    render json: @entity
  end
end
