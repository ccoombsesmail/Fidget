@followers.each do |follow|
    channel = follow.user.channel
    json.set! channel.id do
        json.id channel.id
        json.ownerId channel.owner_id
        json.channelName channel.channel_name
        json.logoUrl url_for(channel.logoUrl)
    end
end

