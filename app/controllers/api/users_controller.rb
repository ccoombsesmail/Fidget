class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            Channel.create({:owner_id => @user.id})
            render :user
        else
            render json: @user.errors.full_messages, status: 422
        end

    end



    private
    def user_params
        params.require(:user).permit(:username, :password)
    end
end
