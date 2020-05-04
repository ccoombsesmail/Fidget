
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


export const postVod = (formData) => {

    return $.ajax({
        method: 'POST',
        url: '/api/vods',
        data: formData,
        contentType: false,
        processData: false
    })

}