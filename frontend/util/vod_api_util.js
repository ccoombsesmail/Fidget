
export const fetchVod = (vodId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/vods/${vodId}`
    })
}


export const fetchVods = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/vods'
    })
}