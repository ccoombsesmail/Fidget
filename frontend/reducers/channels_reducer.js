import {RECEIVE_CHANNELS} from '../actions/channel_actions'



const channelsReducer = (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_CHANNELS:
            return Object.assign({}, state, action.payload.channels)
        default:
            return state
    }
}



export default channelsReducer;


