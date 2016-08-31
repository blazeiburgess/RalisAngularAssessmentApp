class SectionSerializer < ActiveModel::Serializer
  attributes :id, :name, :description
  has_many :subsections
end
