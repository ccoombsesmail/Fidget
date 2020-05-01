json.set! @channel.id do
    json.id @channel.id
    json.ownerId @channel.owner_id
    json.logoUrl url_for(@channel.logoUrl)
end