export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW"
export const REMOVE_FOLLOW = "REMOVE_FOLLOW"
import * as FollowsAPIUtil from '../util/follows_api_util'


const receiveFollow = (channelId) => {

    return {
        type: RECEIVE_FOLLOW,
        channelId
    }

}




const removeFollow = (channelId) => {

    return {
        type: RECEIVE_FOLLOW,
        channelId
    }

}


export const createFollow = (channelId) => dispatch => {
    
    return FollowsAPIUtil.postFollow(channelId)
        .then((channelId) => dispatch(receiveFollow(channelId)))
}


export const deleteFollow = (channelId) => dispatch => {

    return FollowsAPIUtil.deleteFollow(channelId)
        .then((channelId) => dispatch(removeFollow(channelId)))
}