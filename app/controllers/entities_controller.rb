class EntitiesController < ApplicationController
  def index
    @entities = Entity.all
    render json: @entities
  end
end
