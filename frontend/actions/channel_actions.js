export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS'
export const UPDATE_CHANNEL = "UPDATE_CHANNEL"
import * as ChannelAPIUtil from '../util/channels_api_util'



const receiveChannels = (payload) => {

    return{
        type: RECEIVE_CHANNELS,
        payload
    } 
}

const receiveUpdatedChannel = (channel) => {

    return {
        type: UPDATE_CHANNEL,
        channel
    }
}



export const requestChannels = () => dispatch => {

    return ChannelAPIUtil.fetchChannels()
        .then((payload) => dispatch(receiveChannels(payload)))
}


export const updateChannel = (channelOwnerId, formData) => dispatch => {

    return ChannelAPIUtil.updateChannel(channelOwnerId, formData)
        .then(channel => dispatch(receiveUpdatedChannel(channel)))
}

