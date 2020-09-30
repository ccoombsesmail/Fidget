import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Typist from 'react-typist'
import { login } from '../../../actions/session_actions'
import classes from '../SessionForm.module.css'
import TabNavs from '../TabNavs/TabsNav'
/* eslint-disable */


class DemoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: this.props.demoUser.username,
      password: '12345678',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleSubmit() {
    this.props.login(this.state)
  }


  render() {

    return (
      <div className={classes.formWrapper}>
        <a className={classes.formMessage} href="https://fontmeme.com/twitch-logo-font/">
          <img src="https://fontmeme.com/permalink/200429/1e5f1ba7db348c186573e62f09c03de8.png" alt="twitch-logo-font" border="0" />
        </a>
        <TabNavs
          clearErrors={this.props.clearErrors}
          navToOtherForm={this.props.navToOtherForm}
          currentForm={this.props.formType}
        />
        <form onSubmit={this.handleSubmit} className={classes.form}>
          <label className={classes.formLabel}>
            <h4>Username</h4>
            <div className={classes.demoFormInput}>
              <Typist cursor={{ show: false }}>
                FidgetDemoUser
              </Typist>
            </div>
          </label>

          <label className={classes.formLabel}>
            <h4>Password</h4>
            <div className={classes.demoFormInput}>
              <Typist cursor={{ show: false }} onTypingDone={this.handleSubmit}>
                <Typist.Delay ms={1200} />
                *************
              </Typist>
            </div>
          </label>

          <button type="submit" className={classes.formSubmit}>Log In</button>
        </form>
      </div>
    )
  }
}


const mSTP = (state) => {

  return {
    demoUser: state.entities.users[state.ui.demoUserId],
  }
}


const mDTP = (dispatch) => {

  return {
    login: (user) => dispatch(login(user)),
  }
}


export default withRouter(connect(mSTP, mDTP)(DemoForm))
