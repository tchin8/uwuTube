class Api::CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index 
    @video = Video.find(params[:video_id])
    @comments = @video.comments
    render :index
  end 

  def create 
    @comment = Comment.new(comment_params)
    if @comment.save 
      render :show
    else 
      render json: @comment.errors.full_messages, status: 422
    end 
  end 

  def update 
    @comment = Comment.find(params[:id])
    if @comment.update(comment_params)
      render :show
    else 
      render json: @comment.errors.full_messages, status: 422
    end 
  end 

  def destroy 
    @comment = Comment.find(params[:id])
    if @comment.destroy
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end 
  end 

  private 
  def comment_params 
    params.require(:comment).permit(:user_id, :video_id, :body, :parent_comment_id)
  end 
end
