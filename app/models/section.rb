class Section < ApplicationRecord
  has_many :subsections, dependent: :destroy
  belongs_to :entity
end
