json.extract! @user, :id, :email, :fname, :lname
if @user.videos
  json.videos do 
    json.array! (@user.videos.map { |v| v.id })
  end 
end 