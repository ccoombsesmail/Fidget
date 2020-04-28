class Api::SessionsController < ApplicationController

    before_action :require_logged_in, only: [:destroy]

    def create

        # returns [user(possibly nil), usernameError or passwordError] 
        queryResult = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )
        
        @user = queryResult[0]

        if @user
            login!(@user)
            render 'api/users/user'
        else
            render json: queryResult[1], status: 401
        end
    end


    def destroy 
        logout!
        render json: {}
    end
end
