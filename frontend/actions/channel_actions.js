export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS'
import * as ChannelAPIUtil from '../util/channels_api_util'



const receiveChannels = (payload) => {

    return{
        type: RECEIVE_CHANNELS,
        payload
    } 
}




export const requestChannels = () => dispatch => {

    return ChannelAPIUtil.fetchChannels()
        .then((payload) => dispatch(receiveChannels(payload)))
}


