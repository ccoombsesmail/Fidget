import {connect} from 'react-redux'
import SessionControls from './SessionControls'
import { logout } from '../../actions/session_actions'
import { openModal } from '../../actions/modal_actions'



const mSTP = (state) => {

    return {
        currentUser: state.entities.users[state.session.currentUserId]

    }
}



const mDTP = dispatch => {

    return {
        logout: () => dispatch(logout()),
        openModal: (form) => dispatch(openModal(form))
    }
}


export default connect(mSTP, mDTP)(SessionControls)