class Entity < ApplicationRecord
  has_many :sections
  has_many :entity_categories
  has_many :categories, through: :entity_categories
  has_many :general_links
  has_many :general_notes
end
