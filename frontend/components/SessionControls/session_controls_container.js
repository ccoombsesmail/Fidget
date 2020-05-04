import {connect} from 'react-redux'
import SessionControls from './SessionControls'
import { logout } from '../../actions/session_actions'
import { openModal } from '../../actions/modal_actions'
import { requestChannel} from '../../actions/channel_actions'


const mSTP = (state) => {
    const currentUser = state.entities.users[state.session.currentUserId]
    let currentChannel;
    currentUser ? currentChannel = state.entities.channels[currentUser.channelId] : currentChannel = null
    
    return {
        currentUser: currentUser,
        currentChannel: currentChannel
        
    }
}



const mDTP = dispatch => {

    return {
        logout: () => dispatch(logout()),
        openModal: (form) => dispatch(openModal(form)),
        requestChannel: (channelId) => dispatch(requestChannel(channelId))
    }
}


export default connect(mSTP, mDTP)(SessionControls)