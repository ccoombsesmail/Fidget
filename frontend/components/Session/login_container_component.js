import {connect} from 'react-redux'
import { login, clearErrors} from '../../actions/session_actions'
import SessionForm from './SessionForm'
import { openModal, closeModal } from '../../actions/modal_actions'

const mSTP = state => {

    return {
        formType: 'Login',
        otherForm: 'Sign Up',
        errors: state.errors.session
    }

}


const mDTP = dispatch => {

    return{
        processForm: (user) => dispatch(login(user)),
        navToOtherForm: () => dispatch(openModal('signup')),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors())


    }
}


export default connect(mSTP, mDTP)(SessionForm)