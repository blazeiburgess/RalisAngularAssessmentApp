class Category < ApplicationRecord
  has_many :entity_categories
  has_many :entities, through: :entity_categories
end
