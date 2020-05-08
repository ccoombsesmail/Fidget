class Api::ChannelsController < ApplicationController

    def index
        
        if params[:filter] == nil 
            @channels = Channel.all.limit(8)
            render :index
        elsif params[:filter]['firstVods']
            @channels = Channel.all.limit(8)
            render :index_first_vods
        elsif params[:filter]['allChannels']
            @channels = Channel.all
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
