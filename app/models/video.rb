# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  title       :string           not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Video < ApplicationRecord
  validates :user_id, :title, :description, presence: :true

  belongs_to :user,
    class_name: :User,
    foreign_key: :user_id 

  has_one_attached :vid

  has_many :comments,
    class_name: :Comment,
    foreign_key: :video_id
end
