@videos.each do |v| 
  json.set! v.id do 
    json.extract! v, :id, :user_id, :title, :description, :created_at
    json.videoUrl url_for(v.vid)

    json.comments do 
      v.comments.each do |c|
        json.set! comment.id do 
          json.extract! comment, :id, :user_id, :video_id, :body, :created_at, :parent_comment_id
        end 
      end 
    end 
  end 
end 

