@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment, :id, :user_id, :video_id, :body, :parent_comment_id, :created_at
  end
end