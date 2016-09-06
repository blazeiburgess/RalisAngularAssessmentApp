class SubsectionSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :section_id
  has_many :links
  has_many :notes
end
