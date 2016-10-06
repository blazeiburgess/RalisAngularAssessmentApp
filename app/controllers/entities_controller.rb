class EntitiesController < ApplicationController
  def index
    # @entities = Entity.last(50).sort_by {|entity| entity.name.downcase} + Entity.all.select {|e| e.categories.count == 0}
    @entities = Entity.last(200).sort_by {|e| e.name.downcase}
    render json: @entities, each_serializer: SimpleEntitySerializer
    # render json: @entities
  end

  def search
    entities = []
    params[:entity].split(/-/).each do |search_term|
      entities += Entity.all.select {|ent| ent.name.downcase.match(/#{search_term.downcase}/) || ent.description.downcase.match(/#{search_term.downcase}/)  rescue false}.sort_by {|ent| ent.name.downcase}
      # entities = Entity.all.select {|ent| ent.name.downcase.match(/#{params[:entity].downcase}/) || ent.description.downcase.match(/#{params[:entity].downcase}/)  || ent.categories.pluck(:name).any? {|cat| cat.match(/#{params[:entity].downcase}/) } rescue false}
    end
    render json: entities
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
