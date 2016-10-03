class SimpleEntitySerializer < ActiveModel::Serializer
  attributes :id, :name, :description
  #has_many :categories

  # def categories
  #   object.categories.first(5)
  # end
end
