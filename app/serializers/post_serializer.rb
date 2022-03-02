class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :category, :content
end
