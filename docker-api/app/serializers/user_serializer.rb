class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :age, :gender
end
