class Api::ChannelsController < ApplicationController

    def index
        @channels = Channel.all
        render :index
    end
end
