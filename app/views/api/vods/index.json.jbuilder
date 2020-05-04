
@vods.each do |vod|
    json.set! vod.id do
        json.id channel.id
        json.channelId vod.channel_id
        json.title vod.title
        json.category vod.category
        json.videoUrl url_for(vod.videoUrl)
    end
end


