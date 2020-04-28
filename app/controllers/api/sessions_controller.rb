class Api::SessionsController < ApplicationController

    before_action :require_logged_in, only: [:destroy]

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user
            login!(@user)
            render 'api/users/user'
        else
            render json: ['Invalid Credentials'], status: 401
        end
    end


    def destroy 
        logout!
        render json: {}
    end
end
