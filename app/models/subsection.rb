class Subsection < ApplicationRecord
  belongs_to :section
  has_many :links, dependent: :destroy
  has_many :notes, dependent: :destroy
  has_one :entity, through: :section
end
