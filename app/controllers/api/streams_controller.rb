class Api::StreamsController < ApplicationController
  
  def create
    head :no_content
    ActionCable.server.broadcast("stream_channel", call_params)
  end

  private
  def call_params
    params.permit(:call, :type, :from, :to, :sdp)
  end

end
