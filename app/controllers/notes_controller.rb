class NotesController < ApplicationController
  def show
    note = Note.find(params[:id])
    render json: note, status: 200
  end

  def create
    note = Note.new(note_params)
    if note.save
      render json: note, status: 201
    else
      render json: {status: "Failed to create note"}
    end
  end

  private
    def note_params
      params.require(:note).permit(:title, :body, :subsection_id)
    end
end
