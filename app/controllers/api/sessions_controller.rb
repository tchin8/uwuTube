class Api::SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        
        if @user.is_a? Array
            render json: @user, status: 422
        else
            login(@user)
            render 'api/users/show'
        end
    end

    def destroy
        @user = current_user

        if @user
            logout!
        else
            render json: ['No user to log out'], status: 422
        end
    end
end
