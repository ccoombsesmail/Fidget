class Api::VodsController < ApplicationController

    def show
        @vod = Vod.find_by(id: params[:id])
        render :show
    end

end
