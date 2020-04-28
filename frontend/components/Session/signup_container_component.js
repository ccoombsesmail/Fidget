import { connect } from 'react-redux'
import { signup } from '../../actions/session_actions'
import SessionForm from './SessionForm'
import {openModal} from '../../actions/modal_actions'


const mSTP = state => {

    return {
        formType: 'Sign Up',
        otherForm: 'Login'
    }

}


const mDTP = dispatch => {

    return {
        processForm: (user) => dispatch(signup(user)),
        navToOtherForm: () => dispatch(openModal('login')),
        closeModal: () => dispatch(closeModal())

    }
}


export default connect(mSTP, mDTP)(SessionForm)