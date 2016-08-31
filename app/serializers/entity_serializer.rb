class EntitySerializer < ActiveModel::Serializer
  attributes :id, :name, :description
  has_many :sections
  
end
