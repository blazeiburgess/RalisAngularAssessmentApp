class LinksController < ApplicationController
  def show
    link = Link.find(params[:id])
    render json: link, status: 200
  end

  def search
    links = []
    params[:search_terms].split(/-/).each do |search_term|
      links += Link.all.select {|nt| nt.title.downcase.match(/#{search_term.downcase}/) || nt.description.downcase.match(/#{search_term.downcase}/) || nt.href.downcase.match(/#{search_term.downcase}/) rescue false}
      links += GeneralLink.all.select {|nt| nt.title.downcase.match(/#{search_term.downcase}/) || nt.description.downcase.match(/#{search_term.downcase}/) || nt.href.downcase.match(/#{search_term.downcase}/) rescue false}
    end
    render json: links.sort_by {|l| l.title.downcase}
  end

  def create
    link = Link.new(link_params)
    if link.save
      render json: link, status: 201
    else
      render json: {status: "Failed to create link"}
    end
  end

  def update
    link = Link.find(params[:id])
    if link.update(link_params)
      render json: link, status: 200
    else
      render json: {status: "Failed to update link"}
    end
  end

  private
    def link_params
      params.require(:link).permit(:title, :description, :href, :archive, :subsection_id)
    end
end
