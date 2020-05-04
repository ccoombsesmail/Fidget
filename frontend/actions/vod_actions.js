export const RECEIVE_VOD = "RECEIVE_VOD"
export const RECEIVE_VODS = "RECEIVE_VODS"
import * as VodAPIUtil from '../util/vod_api_util'



const receiveVod = (vod) => {
    return {
        type: RECEIVE_VOD,
        vod
    }
}


const receiveVods = (vods) => {
    return {
        type: RECEIVE_VODS,
        vods
    }
}





export const requestVod = (vodId) => dispatch => {

    return VodAPIUtil.fetchVod(vodId)
        .then((vod) => dispatch(receiveVod(vod)))
}



export const requestVods = (filter) => dispatch => {

    return VodAPIUtil.fetchVods(filter)
        .then((vods) => dispatch(receiveVods(vods)))
}

export const createVod = (formData) => dispatch => {

    return VodAPIUtil.postVod(formData)
        .then((vod) => dispatch(receiveVod(vod)))
        .fail(err => console.log(err))
}