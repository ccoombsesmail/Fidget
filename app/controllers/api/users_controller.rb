class Api::UsersController < ApplicationController

    def create
        
      
        newParams = user_params
        newParams["dob"] = params[:user][:dob].to_i
        @user = User.new(newParams)

        if @user.save!
            login!(@user)
            channel = Channel.create({:owner_id => @user.id})
            channel.logoUrl.attach(io: File.open("/mnt/c/Users/coomb/Desktop/Fidget/Fidget/UIHere.png"), filename: 'UIHere.png')
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
