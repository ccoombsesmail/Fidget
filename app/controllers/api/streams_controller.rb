class Api::StreamsController < ApplicationController
  
  def create
    head :no_content
    ActionCable.server.broadcast("stream_channel", call_params)
  end

  private
  def call_params
    permittedParams = params.permit(:call, :type, :id, :stream, :sdp)
    if (params[:candidate])
      
      permittedParams['candidate'] = params[:candidate]
    end
    if (params[:description])
      permittedParams['description'] = params[:description]
    end
    return permittedParams
  end

end


# candidate: [
#       :candidate,
#       :sdpMid,
#       :sdpMLineIndex,
#       :foundation,
#       :component,
#       :address,
#       :protocol,
#       :type,
#       :usernameFragment
#     ],