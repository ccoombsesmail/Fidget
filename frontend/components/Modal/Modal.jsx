import React from 'react'
import {connect} from 'react-redux'
import {closeModal} from '../../actions/modal_actions'
import LoginContainerComponent from '../Session/login_container_component'
import SignupContainerComponent from '../Session/signup_container_component'

import classes from './Modal.module.css'
import DemoForm from '../Session/DemoForm/DemoForm'


const Modal = (props) => {

    if (!props.modal) {
        return null
    }

    let component;
    
    switch (props.modal) {
        case 'login':
            component = <LoginContainerComponent/>
            break;
        case 'signup':
            component = <SignupContainerComponent/>
            break;
        case 'demo':
            component = <DemoForm/>
            break;
        default:
            return null;
    }

    return (
        <div className = {classes.modalBg} onClick = {props.closeModal}>
            <div className={classes.modalChild} onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )

}





const mSTP = state => {
    return {
        modal: state.ui.modal
    }
}


const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}


export default connect(mSTP, mDTP)(Modal)