import React from 'react'
import styles from './SuccessMessage.module.css'
import { closeModal } from '../../actions/modal_actions'
import { connect } from 'react-redux'

const SuccessMessage = (props) => {

    return (
        <div className = {styles.messageWrapper}>
            <h1>Successful Upload</h1>
            <button onClick = {props.closeModal} className = {styles.closeBtn}>Close</button>
        </div>
    )

}


const mDTP = dispatch => {
    return {
        closeModal: (comp) => dispatch(closeModal(comp)),
    }
}


export default connect(null, mDTP)(SuccessMessage)