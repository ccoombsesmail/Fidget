
export const fetchChannels = () => {

    return $.ajax({
        method: 'GET',
        url: 'api/channels'
    })
}


// Will find by channelOwnerId instead of channelId since channelOwnerId is more easily acsesible 
export const updateChannel = (channelOwnerId, formData) => {

    return $.ajax({
        method: 'PATCH',
        url: `/api/channels/${channelOwnerId}`,
        data: formData,
        contentType: false,
        processData: false
    })

}