import { RECEIVE_CURRENT_USER, RECEIVE_NEW_USER } from '../actions/session_actions'
import { RECEIVE_CHANNELS } from '../actions/channel_actions'
import {RECEIVE_FOLLOW, REMOVE_FOLLOW} from '../actions/follow_actions'

const userReducer = (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {[action.user.id]: action.user})
        case RECEIVE_NEW_USER:
            return Object.assign({}, state, action.payload.user)
        case RECEIVE_CHANNELS:
            return Object.assign({}, state, action.payload.users)
        case RECEIVE_FOLLOW:
            let newState = Object.assign({}, state)
            let addFollow = [...newState[action.follow.userId].follows]
            addFollow.push(action.follow.channelId)
            newState[action.follow.userId].follows = addFollow
            return newState
        case REMOVE_FOLLOW:
            let newState2 = Object.assign({}, state)
            let indexOfChannel = newState2[action.follow.userId].follows.indexOf(action.follow.channelId)
            let removeFollow = newState2[action.follow.userId].follows.filter((follow, idx)  => idx !== indexOfChannel)
            newState2[action.follow.userId].follows = removeFollow
            return newState2
        default:
            return state
    }

}


export default userReducer;