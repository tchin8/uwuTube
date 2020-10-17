@videos.each do |v| 
  json.set! v.id do 
    json.extract! v, :id, :user_id, :title, :description, :created_at
    json.videoUrl url_for(v.vid)

    json.comments do 
      json.array!(v.comments.map { |c| c.id} )
      # json.array!((v.comments.select { |c| !c.parent_comment_id }).map { |c| c.id })
    end 

    json.views v.views.length

    #json.comments do 
    #  v.comments.each do |c|
    #    json.set! c.id do 
    #      json.extract! c, :id, :user_id, :video_id, :body, :created_at, :parent_comment_id
    #    end 
    #  end 
    #end 
  end 
end 

