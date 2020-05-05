class Api::ChannelsController < ApplicationController

    def index
        @channels = Channel.all
        if params[:filter] == nil
            render :index
        else
            render :index_first_vods
        end
    end


    def show
        @channel = Channel.find_by(id: params[:id])
        render :show
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
