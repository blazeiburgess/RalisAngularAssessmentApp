class SimpleEntitySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :upvotes
  # has_many :categories

  # def categories
  #   object.categories.first(5)
  # end
end
