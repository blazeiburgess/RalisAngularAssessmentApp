class SimpleCategorySerializer < ActiveModel::Serializer
  attributes :id, :name

  def cats
    object.entities.pluck(:name)
  end
end
