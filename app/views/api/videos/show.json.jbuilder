json.extract! @video, :id, :user_id, :title, :description, :created_at, :updated_at
json.videoUrl url_for(@video.vid)
json.comments do 
  json.array!(v.comments.map { |c| c.id} )
  # json.array!((v.comments.select { |c| !c.parent_comment_id }).map { |c| c.id })
end 