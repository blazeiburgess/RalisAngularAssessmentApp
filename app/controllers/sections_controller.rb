class SectionsController < ApplicationController
  def index
    sections = Section.all
    render json: sections
  end

  def show
    section = Section.find(params[:id])
    render json: section
  end

  def create
    section = Section.new(section_params)
    if section.save
      render json: section, status: 201
    else
      render json: {status: "Failed to create section"}
    end
  end

  private
    def section_params
      params.require(:section).permit(:name, :description, :entity_id)
    end
end
