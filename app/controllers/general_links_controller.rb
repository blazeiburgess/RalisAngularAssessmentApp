class GeneralLinksController < ApplicationController
  def create
    general_link = GeneralLink.new(general_link_params)
    if general_link.save
      render json: general_link, status: 201
    else
      render json: {status: "Failed to create link"}
    end
  end

  private
    def general_link_params
      params.require(:link).permit(:title, :description, :href, :archive, :entity_id)
    end
end
