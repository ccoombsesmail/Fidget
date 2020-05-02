import {RECEIVE_VOD} from '../actions/vod_actions'



const vodsReducer = (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_VOD:
            return Object.assign({}, state, action.vod)
        default:
            return state
    }
}



export default vodsReducer;