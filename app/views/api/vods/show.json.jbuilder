json.set! @vod.id do
    json.id @vod.id
    json.channel_id @vod.channel_id
    json.title @vod.title
    json.category @vod.category 
    json.videoUrl url_for(@vod.videoUrl)

end