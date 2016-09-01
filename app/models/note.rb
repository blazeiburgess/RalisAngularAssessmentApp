class Note < ApplicationRecord
  belongs_to :subsection
  def created_at
    super.strftime("%B %d, %Y, %l:%M%P")
  end
end
