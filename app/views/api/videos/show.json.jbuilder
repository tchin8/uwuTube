json.extract! @video, :id, :user_id, :title, :description, :created_at
json.videoUrl url_for(@video.vid)