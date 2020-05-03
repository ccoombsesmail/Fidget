class Api::ChannelsController < ApplicationController

    def index
        @channels = Channel.all
        render :index
    end


    def update
        
        @channel = Channel.find_by(owner_id: params[:id])

        if @channel.update(channel_params)
            
            render :show
        else
            render @channel.errors.full_messages, status: 401
        end
    end

    private
    def channel_params
        params.require(:channel).permit(:owner_id, :logoUrl)
    end
end
