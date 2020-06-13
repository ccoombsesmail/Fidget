class Api::FollowsController < ApplicationController
        before_action :require_logged_in, only: [:destroy, :create]


    def show
        @followers = Follow.where("channel_id = ?", params[:id]).includes(:user).includes(:channel).references(:user).references(:channel)
        render :show
    end


    def create
        @follow = Follow.new(follow_params)

        if @follow.save
            render :follow
        else
            render json: @follow.errors.full_messages, status: 422
        end
    end



    def destroy 
        @follow = Follow.where(channel_id: params[:id], user_id: current_user.id)[0]
        if @follow
            Follow.destroy(@follow.id)
            render :follow
        else
            render json: ["Follow does not exist"]
        end
    end


    private
    def follow_params
        params.require(:follow).permit(:channel_id, :user_id)
    end
end
