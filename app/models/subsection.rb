class Subsection < ApplicationRecord
  belongs_to: :section
  has_many :links
  has_many :notes
end
