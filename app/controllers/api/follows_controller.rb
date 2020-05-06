class Api::FollowsController < ApplicationController


    def create
        @like = Like.new(like_params)
    end



    def destroy 
        @like = Like.where(channel_id: params[:id], user_id: current_user.id)

        if @like
            @like.destroy
        else
            render json: {"Follow does not exist"}
        end
    end


    private
    def like_params
        params.require(:like).permit(:channel_id, :user_id)
    end
end
