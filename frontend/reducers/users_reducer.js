import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
import { RECEIVE_CHANNELS } from '../actions/channel_actions'
import {RECEIVE_FOLLOW, REMOVE_FOLLOW} from '../actions/follow_actions'

const userReducer = (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {[action.user.id]: action.user})
            // return Object.assign({}, state, action.user)
        case RECEIVE_CHANNELS:
            return Object.assign({}, state, action.payload.users)
        // case RECEIVE_FOLLOW:
        //     let newState = Object.assign({}, state)
        //     newState[action.follow.userId].follows.push(action.follow.channelId)
        default:
            return state
    }

}


export default userReducer;