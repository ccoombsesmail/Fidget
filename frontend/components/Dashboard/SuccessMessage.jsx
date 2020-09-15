import React from 'react'
import { connect } from 'react-redux'
import { closeModal } from '../../actions/modal_actions'
import styles from './SuccessMessage.module.css'
/* eslint-disable */

const SuccessMessage = ({ closeModalOnClick }) => {

  return (
    <div className={styles.messageWrapper}>
      <h1>Successful Upload</h1>
      <button type="button" onClick={closeModalOnClick} className={styles.closeBtn}>Close</button>
    </div>
  )
}


const mDTP = (dispatch) => {
  return {
    closeModalOnClick: (comp) => dispatch(closeModal(comp)),
  }
}


export default connect(null, mDTP)(SuccessMessage)
