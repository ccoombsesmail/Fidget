export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS'
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL'
export const UPDATE_CHANNEL = "UPDATE_CHANNEL"
export const CLEAR_CHANNELS = "CLEAR_CHANNELS"
export const RECEIVE_SEARCHED_CHANNELS = "RECEIVE_SEARCHED_CHANNELS"
import * as ChannelAPIUtil from '../util/channels_api_util'



const receiveChannel = (channel) => {

    return {
        type: RECEIVE_CHANNEL,
        channel
    }
}


const receiveChannels = (payload) => {

    return{
        type: RECEIVE_CHANNELS,
        payload
    } 

}

const receiveSearchedChannels = (payload) => {

    return{
        type: RECEIVE_SEARCHED_CHANNELS,
        payload
    } 
}



const receiveUpdatedChannel = (channel) => {

    return {
        type: UPDATE_CHANNEL,
        channel
    }
}


export const clearChannels = () => {

    return {
        type: CLEAR_CHANNELS,
    }  
}



export const requestChannel = (channelId) => dispatch => {

    return ChannelAPIUtil.fetchChannel(channelId)
        .then((channel) => dispatch(receiveChannel(channel)))
}



export const requestChannels = (filter) => dispatch => {

    return ChannelAPIUtil.fetchChannels(filter)
        .then((payload) => dispatch(receiveChannels(payload)))
}


export const requestSearchedChannels = (filter) => dispatch => {

    return ChannelAPIUtil.fetchChannels(filter)
        .then((payload) => dispatch(receiveSearchedChannels(payload)))
}


export const updateChannel = (channelOwnerId, formData) => dispatch => {

    return ChannelAPIUtil.updateChannel(channelOwnerId, formData)
        .then(channel => dispatch(receiveUpdatedChannel(channel)))
}

