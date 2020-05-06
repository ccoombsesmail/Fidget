json.channels do
    @channels.each do |channel|
        json.set! channel.id do
            json.id channel.id
            json.ownerId channel.owner_id
            json.logoUrl url_for(channel.logoUrl)
        end
    end
end


json.vods do
    @channels.each do |channel|
        vod = channel.vods.first
        if !vod.nil?
            json.set! vod.id do
                json.id vod.id
                json.channelId vod.channel_id
                json.title vod.title
                json.category vod.category
                json.videoUrl url_for(vod.videoUrl)
            end
        else
            json.set! channel.id do
                json.id nil
                json.channelId channel.id
                json.title nil
                json.category nil
                json.videoUrl nil
            end
        end
    end
end


json.users do
    @channels.each do |channel|
        owner = channel.owner
        json.set! owner.id do
            json.id owner.id
            json.username owner.username
            json.channelId channel.id
            json.follows owner.followed_channels.map{|channel| channel.id }
        end
    end
end