class SubsectionsController < ApplicationController
  def index
    subsections = Subsection.all
    render json: subsections
  end

  def show
    subsection = Subsection.find(params[:id])
    render json: subsection
  end

  def recent
    subsections = Subsection.last(50)
    render json: subsections
  end

  def create
    subsection = Subsection.new(subsection_params)
    if subsection.save
      render json: subsection, status: 201
    else
      render json: {status: "Failed to create subsection"}
    end
  end

  def update
    subsection = Subsection.find(params[:id])
    if subsection.update(subsection_params)
      render json: subsection, status: 200
    else
      render json: {status: "Failed to update subsection"}
    end
  end

  private
    def subsection_params
      params.require(:subsection).permit(:name, :description, :section_id)
    end
end
