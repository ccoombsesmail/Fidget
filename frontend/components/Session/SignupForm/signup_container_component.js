import { connect } from 'react-redux'
import { signup, clearErrors } from '../../../actions/session_actions'
import SessionForm from '../SessionForm'
import {openModal, closeModal} from '../../../actions/modal_actions'
import SignupForm from './SignupForm'

const mSTP = state => {

    return {
        formType: 'Sign Up',
        otherForm: 'Login',
        errors: state.errors.session
    }

}


const mDTP = dispatch => {

    return {
        processForm: (user) => dispatch(signup(user)),
        navToOtherForm: () => dispatch(openModal('login')),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors())

    }
}


export default connect(mSTP, mDTP)(SignupForm)