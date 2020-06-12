import {RECEIVE_VOD, RECEIVE_VODS, RECEIVE_RANDOM_VODS, CLEAR_VODS} from '../actions/vod_actions'
import { RECEIVE_CHANNELS } from '../actions/channel_actions'



const vodsReducer = (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_VOD:
            return Object.assign({}, state, action.vod)
        case RECEIVE_VODS:
            return Object.assign({}, action.payload.vods )
        case RECEIVE_RANDOM_VODS:
          let newState = Object.assign({}, state)
          newState['randomVods'] = action.payload.vods
          return newState
        case RECEIVE_CHANNELS:
            if (action.payload.vods) {
                return Object.assign({}, state, action.payload.vods)
            }else {
                return state
            }
        case CLEAR_VODS:
            return {}
        default:
            return state
    }
}



export default vodsReducer;