class NotesController < ApplicationController
  def show
    note = Note.find(params[:id])
    render json: note, status: 200
  end

  def last50
    notes = Note.last(50)
    render json: notes, status: 200
  end

  def search
    notes = []
    params[:search_terms].split(/-/).each do |search_term|
      notes += Note.all.select {|nt| nt.title.downcase.match(/#{search_term.downcase}/) || nt.body.downcase.match(/#{search_term.downcase}/)  rescue false}
    end
    render json: notes
  end

  def create
    note = Note.new(note_params)
    if note.save
      render json: note, status: 201
    else
      render json: {status: "Failed to create note"}
    end
  end

  def update
    note = Note.find(params[:id])
    if note.update(note_params)
      render json: note, status: 200
    else
      render json: {status: "Failed ot update note"}
    end
  end

  private
    def note_params
      params.require(:note).permit(:title, :body, :subsection_id)
    end
end
