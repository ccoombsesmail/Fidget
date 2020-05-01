class Api::UsersController < ApplicationController

    def create
        
      
        newParams = user_params
        newParams["dob"] = params[:user][:dob].to_i
        @user = User.new(newParams)

        if @user.save!
            login!(@user)
            Channel.create({:owner_id => @user.id})
            render :user
        else
            
            render json: @user.errors.full_messages, status: 422
        end

    end


    private
    def user_params
        params.require(:user).permit(:username, :password, :email, :dob)
    end
end
