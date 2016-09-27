class SimpleEntitySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :upvotes
  # has_many :categories
end
