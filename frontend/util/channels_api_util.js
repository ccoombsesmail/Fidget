
export const fetchChannels = () => {

    return $.ajax({
        method: 'GET',
        url: 'api/channels'
    })
}