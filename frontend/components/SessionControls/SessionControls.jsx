import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import classes from './SessionControls.module.css'
import DropDownMenu from './DropDownMenu/DropDownMenu'


class SessionControls extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showMenu: false,
    }

    this.openModalOnClick = this.openModalOnClick.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  componentDidMount() {
    document.body.addEventListener('click', this.toggleMenu)
    // this.userIcon = document.querySelector("[data-icon='user-ninja'") || document.querySelector("[data-icon='user'")
    this.userIcon = document.querySelector("[data-icon='user'") || document.getElementById('userIcon')
    if (this.props.currentUser) {
      this.props.requestChannel(this.props.currentUser.channelId)
    }
  }


  componentDidUpdate() {
    // this.userIcon = document.querySelector("[data-icon='user-ninja'") || document.querySelector("[data-icon='user'")
    this.userIcon = document.querySelector("[data-icon='user'") || document.getElementById("userIcon")
    document.body.addEventListener('click', this.toggleMenu)
  }


  openModalOnClick(type) {
    return () => {
      this.props.openModal(type)
    }
  }

  toggleMenu(e) {
    // this.userIcon.contains(e.target)
    if (this.userIcon && (e.target === this.userIcon || this.userIcon.contains(e.target))) {
      this.toggle()
      e.stopPropagation()
    } else if (this.state.showMenu && !(e.target.closest('ul') === document.querySelector('ul'))) {
      this.toggle()
    }
  }

  toggle() {
    this.setState({ showMenu: !this.state.showMenu })
  }


  render() {
    return (

      <div>
        {
          this.props.currentUser ? (
            <div className={classes.welcomeWrapper}>
              <DropDownMenu
                toggle={this.toggle}
                currentChannel={this.props.currentChannel}
                logout={this.props.logout}
                currentUser={this.props.currentUser}
                showMenu={this.state.showMenu} />
              {
                this.props.currentChannel ? (
                  <div id="userIcon" onClick={this.toggleMenu} className={classes.userIconWrapper}> 
                    <img className = {classes.userIcon} src={this.props.currentChannel.logoUrl} /> 
                  </div>
                ) : null
              }
        </div>
          ) : (
            <div className={classes.controlsWrapper}>
              <button className={classes.signup} onClick={this.openModalOnClick('demo')}>  Demo </button>
              <button className={classes.login} onClick={this.openModalOnClick('login')}>  Log In  </button>
              <button className={classes.signup} onClick={this.openModalOnClick('signup')}> Sign Up </button>
              <FontAwesomeIcon onClick={this.toggleMenu} className={classes.userIconLoggedOut} icon={faUser} style={{ backgroundColor: 'transparent'}}  />
              <DropDownMenu toggle={this.toggle} login={this.openModalOnClick('login')} currentUser={this.props.currentUser} showMenu={this.state.showMenu} />
          </div>
          )
          }
      </div>
    )
  }
}


export default SessionControls
