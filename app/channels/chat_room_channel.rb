class ChatRoomsChannel < ApplicationCable::Channel
  def subscribed
    stream_for "chat_rooms_channel_#{params[:id]}"
  end

  def speak(data)
    message = Message.create({:user_id => data['user_id'], :body => data['message']})
    broadcastMessage = {message: message.body, username: message.user.username}
    ChatRoomsChannel.broadcast_to("chat_rooms_channel_#{data['channelName']}", broadcastMessage)
  end



  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
