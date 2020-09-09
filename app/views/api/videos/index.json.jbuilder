@videos.each do |v| 
  json.set! v.id do 
    json.extract! v, :id, :user_id, :title, :description, :created_at
    json.videoUrl url_for(v.vid)
  end 
end 

