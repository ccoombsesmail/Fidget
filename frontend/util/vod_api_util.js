
export const fetchVod = (vodId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/vods/${vodId}`
    })
}