class LinksController < ApplicationController
  def show
    link = Link.find(params[:id])
    render json: link, status: 200
  end

  def create
    link = Link.new(link_params)
    if link.save
      render json: link, status: 201
    else
      render json: {status: "Failed to create link"}
    end
  end

  private
    def link_params
      params.require(:link).permit(:title, :description, :href, :archive, :subsection_id)
    end
end
