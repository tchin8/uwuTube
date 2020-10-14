class Api::LikesController < ApplicationController
  def index
    if params[:user_id]
      @likes = User.find(params[:user_id]).likes
      # render something
    elsif params[:video_id]
      @likes = Video.find(params[:video_id]).likes
      # render something else
    else 
      @likes = Comment.find(params[:comment_id]).likes
      # render something else
    end 
  end 

  def create 
    @like = Like.new(like_params)
    if like.save
      # something
    else 
      # idk what else 
    end 
  end 

  def destroy 
    @like = Like.find(params[:id])
    @like.destroy
    # still render?
  end 

  private
  def like_params
    params.require(:like).permit(:liker_id, :likeable_type, :likeable_id)
  end 
end
