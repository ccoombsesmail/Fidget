

    json.id user.id
    json.username user.username
    json.channelId user.channel.id
    json.follows user.followed_channels.map{|channel| channel.id }
