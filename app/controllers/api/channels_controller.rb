class Api::ChannelsController < ApplicationController

    def index
        
        if params[:filter] == nil 
            @channels = Channel.all.limit(8)
            render :index
        elsif params[:filter]['firstVods']                      # Get first 8 channels along with their first vods to use as thumbnails (home page)
            @channels = Channel.order(:created_at).limit(8)
            render :index_first_vods
        elsif params[:filter]['allChannels']                    # Get all channels along with their first vods to use as thumbnails (directory/browse)
            @channels = Channel.all
            render :index_first_vods
        elsif params[:filter]['searchChannels']
            @channels = Channel.where("channel_name LIKE ?", "%#{params[:filter]['searchInput']}%")
            print(@channels)
            render :index
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
