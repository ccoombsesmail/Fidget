export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW"
export const REMOVE_FOLLOW = "REMOVE_FOLLOW"
import * as FollowsAPIUtil from '../util/follows_api_util'


const receiveFollow = (follow) => {

    return {
        type: RECEIVE_FOLLOW,
        follow
    }

}




const removeFollow = (follow) => {

    return {
        type: REMOVE_FOLLOW,
        follow
    }

}


export const createFollow = (follow) => dispatch => {
    
    return FollowsAPIUtil.postFollow(follow)
        .then((follow) => dispatch(receiveFollow(follow)))
}


export const deleteFollow = (channelId) => dispatch => {

    return FollowsAPIUtil.deleteFollow(channelId)
        .then((follow) => dispatch(removeFollow(follow)))
}