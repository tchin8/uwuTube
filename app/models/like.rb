# == Schema Information
#
# Table name: likes
#
#  id            :bigint           not null, primary key
#  liker_id      :integer          not null
#  likeable_type :string
#  likeable_id   :bigint
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Like < ApplicationRecord
  validates :liker_id, uniqueness: {scope: [:likeable_id, :likeable_type], message: 'can''t like the same thing twice!'}

  belongs_to :liker,
    foreign_key: :liker_id,
    class_name: :User

  belongs_to :likeable, polymorphic: true
end
