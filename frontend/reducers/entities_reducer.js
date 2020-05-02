import { combineReducers } from 'redux'
import usersReducer from './users_reducer'
import channelsReducer from './channels_reducer';
import vodsReducer from './vods_reducer';


const entitiesReducer = combineReducers({
    users: usersReducer,
    channels: channelsReducer,
    vods: vodsReducer
})


export default entitiesReducer;