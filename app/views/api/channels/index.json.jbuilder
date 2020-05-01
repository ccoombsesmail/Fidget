
json.channels do
    @channels.each do |channel|
        json.set! channel.id do
            json.id channel.id
            json.ownerId channel.owner_id
            json.logoUrl url_for(channel.logoUrl)
        end
    end
end


json.users do
    @channels.each do |channel|
        owner = channel.owner
        json.set! owner.id do
            json.id owner.id
            json.username owner.username
        end
    end
end