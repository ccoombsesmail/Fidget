import {RECEIVE_VOD, RECEIVE_VODS} from '../actions/vod_actions'



const vodsReducer = (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_VOD:
            return Object.assign({}, state, action.vod)
        case RECEIVE_VODS:
            return Object.assign({}, state, action.vods )
        default:
            return state
    }
}



export default vodsReducer;