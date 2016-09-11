class Entity < ApplicationRecord
  has_many :sections, dependent: :destroy
  has_many :entity_categories, dependent: :destroy
  has_many :categories, through: :entity_categories
  has_many :general_links, dependent: :destroy
  has_many :general_notes, dependent: :destroy
end
