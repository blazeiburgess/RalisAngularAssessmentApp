class SubsectionSerializer < ActiveModel::Serializer
  attributes :id, :name, :description
  has_many :links
  has_many :notes
end
