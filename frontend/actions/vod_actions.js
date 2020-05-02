export const RECEIVE_VOD = "RECEIVE_VOD"
import * as VodAPIUtil from '../util/vod_api_util'



const receiveVod = (vod) => {
    return {
        type: RECEIVE_VOD,
        vod
    }
}




export const requestVod = (vodId) => dispatch => {

    return VodAPIUtil.fetchVod(vodId)
        .then((vod) => dispatch(receiveVod(vod)))
}
