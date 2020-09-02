class Api::UsersController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        @users = User.all
        render :index
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else    
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end

    def update
        @user = User.find_by(id: params[:id])
        if(@user.update(user_params))
            render :show
        else 
            render json: @user.errors.full_messages, status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:fname, :lname, :email, :password)
    end
end
