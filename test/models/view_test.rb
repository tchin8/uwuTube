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
require 'test_helper'

class ViewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
