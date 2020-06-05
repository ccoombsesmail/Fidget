import {RECEIVE_VOD, RECEIVE_VODS, CLEAR_VODS} from '../actions/vod_actions'
import { RECEIVE_CHANNELS } from '../actions/channel_actions'



const vodsReducer = (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_VOD:
            console.log(action)
            return Object.assign({}, state, action.vod)
        case RECEIVE_VODS:
            return Object.assign({}, action.payload.vods )
        case RECEIVE_CHANNELS:
            return Object.assign({}, action.payload.vods)
        case CLEAR_VODS:
            return {}
        default:
            return state
    }
}



export default vodsReducer;