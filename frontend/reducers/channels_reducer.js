import {RECEIVE_CHANNELS, UPDATE_CHANNEL, RECEIVE_CHANNEL} from '../actions/channel_actions'



const channelsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CHANNELS:
            return Object.assign({}, state, action.payload.channels);
        case RECEIVE_CHANNEL:
            return Object.assign({}, state, action.channel);
        case UPDATE_CHANNEL:
            let newState = Object.assign({}, state);
            newState[action.channel.id] = action.channel;
            return newState;
        default:
            return state;
    }
}



export default channelsReducer;


