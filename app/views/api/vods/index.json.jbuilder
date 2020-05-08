json.vods do
    @vods.each do |vod|
        json.set! vod.id do
            json.id vod.id
            json.channelId vod.channel_id
            json.title vod.title
            json.category vod.category
            json.videoUrl url_for(vod.videoUrl)
        end
    end
end


json.channels do
    @vods.each do |vod|
        channel = vod.channel
        json.set! channel.id do
            json.id channel.id
            json.ownerId channel.owner_id
            json.channelName channel.channel_name
            json.logoUrl url_for(channel.logoUrl)
        end
    end
end

