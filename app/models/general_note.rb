class GeneralNote < ApplicationRecord
  belongs_to :entity

  def created_at
    super.strftime("%b %d, %Y, %l:%M%P")
  end
end
