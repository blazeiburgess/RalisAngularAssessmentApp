class Category < ApplicationRecord
  has_many :entity_categories, dependent: :destroy
  has_many :entities, through: :entity_categories
  before_save :downcase_name
  validates :name, uniqueness: { case_sensitie: false }

  def cats
    entities
  end

  def downcase_name
    self.name = self.name.downcase
  end
end
