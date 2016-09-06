class SectionSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :entity_id
  has_many :subsections
end
