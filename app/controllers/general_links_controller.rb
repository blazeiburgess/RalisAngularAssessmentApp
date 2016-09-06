class GeneralLinksController < ApplicationController
  def show
    general_link = GeneralLink.find(params[:id])
    render json: general_link, status: 200
  end

  def create
    general_link = GeneralLink.new(general_link_params)
    if general_link.save
      render json: general_link, status: 201
    else
      render json: {status: "Failed to create link"}
    end
  end

  def update
    general_link = GeneralLink.find(params[:id])
    if general_link.update(general_link_params)
      render json: general_link, status: 200
    else
      render json: {status: "Failed to create link"}
    end
  end

  private
    def general_link_params
      params.require(:link).permit(:title, :description, :href, :archive, :entity_id)
    end
end
