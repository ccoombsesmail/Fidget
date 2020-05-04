class Api::VodsController < ApplicationController

    def index
        @vods = Vod.all
        render :index
    end

    def show
        @vod = Vod.find_by(id: params[:id])
        render :show
    end

end
