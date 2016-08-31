class EntitySerializer < ActiveModel::Serializer
  attributes :id, :name, :description
  has_many :sections, include_nested_associations: true
  has_many :categories
  has_many :general_links
  has_many :general_notes
  
end
