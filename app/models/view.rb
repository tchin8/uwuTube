# == Schema Information
#
# Table name: views
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  video_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class View < ApplicationRecord
  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :video,
    foreign_key: :video_id,
    class_name: :Video
end
