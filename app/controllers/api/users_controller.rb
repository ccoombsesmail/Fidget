require 'open-uri'

class Api::UsersController < ApplicationController

    def create
        
      
        newParams = user_params
        newParams["dob"] = params[:user][:dob].to_i
        @user = User.new(newParams)

        if @user.save
            login!(@user)
            @channel = Channel.create({:owner_id => @user.id})
            file = open('https://fidget-seeds.s3-us-west-1.amazonaws.com/defaultlogo1.png')
            @channel.logoUrl.attach(io: file, filename: 'defaultlogo1.png')
            render :new_user
        else
            render json: @user.errors.full_messages, status: 422
        end

    end


    private
    def user_params
        params.require(:user).permit(:username, :password, :email, :dob)
    end

end
