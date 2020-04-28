import {connect} from 'react-redux'
import {login} from '../../actions/session_actions'
import SessionForm from './SessionForm'
import { openModal, closeModal } from '../../actions/modal_actions'

const mSTP = state => {

    return {
        formType: 'Login',
        otherForm: 'Sign Up'
    }

}


const mDTP = dispatch => {

    return{
        processForm: (user) => dispatch(login(user)),
        navToOtherForm: () => dispatch(openModal('signup')),
        closeModal: () => dispatch(closeModal())

    }
}


export default connect(mSTP, mDTP)(SessionForm)