class EntitiesController < ApplicationController
  def index
    # @entities = Entity.last(50).sort_by {|entity| entity.name.downcase} + Entity.all.select {|e| e.categories.count == 0}
    @entities = (Entity.last(2000) + Entity.select {|ent| ent.categories.count == 0}).uniq.sort_by {|e| e.name.downcase}
    render json: @entities, each_serializer: SimpleEntitySerializer
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

  def upvote
    entity = Entity.find(params[:id])
    entity.upvotes += 1
    entity.save
    render json: entity
  end

  def downvote
    entity = Entity.find(params[:id])
    entity.upvotes -= 1
    entity.save
    render json: entity
  end

  private
    def entity_params
      params.require(:entity).permit(:name, :description)
    end
end
