class Api::VideosController < ApplicationController
  def index
    @videos = Video.all
  end

  def create 
    @video = Video.new(video_params)
    if @video.save 
      render :show
    else 
      render json: @video.errors.full_messages, status: 422
    end 
  end 

  def show 
    @video = Video.find_by(id: params[:id])
    render :show
  end 

  def update 
    @video = Video.find_by(id: params[:id])
    if @video.update(video_params)
      render :show
    else
      render json: @video.errors.full_messages, status: 422
    end
  end 

  def destroy
    @video = Video.find_by(id: params[:id])
    if @video.destroy
      render :show
      # should this be render :show or mainpage or error page
      # like saying 'sorry that video cannot be found' ? idk
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

  private 

  def video_params 
    params.require(:video).permit(:user_id, :title, :description, :vid)
  end 
end
