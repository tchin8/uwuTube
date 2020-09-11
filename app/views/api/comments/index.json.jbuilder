@comments.each do |comment|
  if !comment.parent_comment_id 
    json.set! comment.id do
      json.extract! comment, :id, :user_id, :video_id, :body, :parent_comment_id, :created_at, :updated_at

      json.replies do 
        json.array!(comment.replies)
      end 
    end
  end 
end