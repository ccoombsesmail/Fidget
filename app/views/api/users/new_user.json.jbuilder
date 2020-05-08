json.user do
    json.set! @user.id do
        json.id @user.id
        json.username @user.username
        json.channelId @user.channel.id
        json.follows @user.followed_channels.map{|channel| channel.id }
    end
end


json.channel do 
   json.set! @channel.id do
        json.id @channel.id
        json.ownerId @channel.owner_id
        json.channelName @channel.channel_name
        json.logoUrl url_for(@channel.logoUrl)
    end
end