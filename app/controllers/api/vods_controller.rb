require 'open-uri'

class Api::VodsController < ApplicationController

    def index
        @vods = Vod.all_filter(params[:filter])
        render :index
    end

    def show
        
        @vod = Vod.find_by(id: params[:id])
        
        render :show
    end

    def create
        
        @vod = Vod.new(vod_params)
        if @vod.save
            render :show
        else
            render json: @vod.errors.full_messages, status: 422
        end

    end


    private

    def vod_params
        params.require(:vod).permit(:channel_id, :title, :category, :videoUrl)

    end
end
