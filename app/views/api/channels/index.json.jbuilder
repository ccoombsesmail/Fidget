
json.channels do
    @channels.each do |channel|
        json.set! channel.id do
            json.id channel.id
            json.ownerId channel.owner_id
            if channel.id == 6
                json.logoUrl url_for(channel.logo)
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
        end
    end
end