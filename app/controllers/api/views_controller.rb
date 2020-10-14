class Api::ViewsController < ApplicationController
  def index 
    @views = View.where(user_id: params[:user_id])
    # render index which is prob just my all highest viewed videos? idk listed, ordered or something
  end 

  def create 
    @View = View.new(view_params)
    if @view.save
      # something
    else 
      # something else 
    end 
  end 

  private 
  def view_params
    params.require(:view).permit(:user_id, :video_id)
  end 
end
