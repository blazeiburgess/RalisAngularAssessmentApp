class GeneralNotesController < ApplicationController
  def show
    note = GeneralNote.find(params[:id])
    render json: note, status: 200
  end
  def create
    general_note = GeneralNote.new(general_note_params)
    if general_note.save
      render json: general_note, status: 201
    else
      render json: {status: "Failed to create note"}
    end
  end

  def update
    general_note = GeneralNote.find(params[:id])
    if general_note.update(general_note_params)
      render json: general_note, status: 200
    else
      render json: {status: "Failed to update note"}
    end
  end

  private
    def general_note_params
      params.require(:note).permit(:title, :body, :entity_id)
    end
end
