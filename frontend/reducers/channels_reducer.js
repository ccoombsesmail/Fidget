import { RECEIVE_CHANNELS, UPDATE_CHANNEL, RECEIVE_CHANNEL, CLEAR_CHANNELS, RECEIVE_SEARCHED_CHANNELS } from '../actions/channel_actions'
import { RECEIVE_NEW_USER } from '../actions/session_actions'
import {RECEIVE_VODS, RECEIVE_RANDOM_VODS } from '../actions/vod_actions'
import { RECEIVE_FOLLOWED_CHANNELS } from '../actions/follow_actions'


const channelsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CHANNELS:
      return Object.assign({}, state, action.payload.channels)
    case RECEIVE_CHANNEL:
      return Object.assign({}, state, action.channel)
    case UPDATE_CHANNEL:
      newState = Object.assign({}, state)
      const channel = Object.values(action.channel)[0]
      newState[channel.id] = channel
      return newState
    case RECEIVE_NEW_USER:
      return Object.assign({}, state, action.payload.channel)
    case RECEIVE_VODS:
      return Object.assign({}, state, action.payload.channels)
    case RECEIVE_RANDOM_VODS:
      newState = Object.assign({}, state)
      newState['randomVodChannels'] = action.payload.channels
      return newState
    case RECEIVE_SEARCHED_CHANNELS:
      newState = Object.assign({}, state)
      newState['searched'] = action.payload.channels
      return newState
    case RECEIVE_FOLLOWED_CHANNELS:
      newState = Object.assign({}, state)
      newState['followedChannels'] = action.channels
      return newState
    case CLEAR_CHANNELS:
      return {}
    default:
      return state
  }
}



export default channelsReducer;


