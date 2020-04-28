import React from 'react'
import {Link} from 'react-router-dom'
import classes from './SessionControls.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserNinja } from '@fortawesome/free-solid-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'

class SessionControls extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showMenu: false
        }
        this.handleClick = this.handleClick.bind(this)
        this.openModalOnClick = this.openModalOnClick.bind(this)
        this.toggle = this.toggle.bind(this)
    }

    handleClick() {
        this.props.logout()
    }

    openModalOnClick(type) {
        return () => {
            this.props.openModal(type)
        }
    }

    toggle() {
        this.setState({showMenu: !this.state.showMenu})
    }

    render() {
        let menuClasses = [classes.dropDown];
        if (this.state.showMenu) {
            menuClasses.push(classes.show)
        }else {
            menuClasses.push(classes.hide)
        }
        return (

            <div>
              {
                  this.props.currentUser ? (  
                    <div className={classes.welcomeWrapper}>
                        <h2 className={classes.welcomeMessage}  > Welcome {this.props.currentUser.username}</h2>
                        <Link className={classes.logout} to = '/' onClick = {this.handleClick} >Logout</Link>
                        <FontAwesomeIcon onClick={this.toggle} className={classes.userIcon} icon={faUserNinja} />
                        <ul className={menuClasses.join(' ')}>
                            <li><FontAwesomeIcon className={classes.userIconList} icon={faVideo} /> <span> Channel </span> </li>
                            <li><FontAwesomeIcon className={classes.userIconList} icon={faCog} /><span> Dashboard </span> </li>
                        </ul>    

                    </div>
                  ) : (
                    <div className={classes.controlsWrapper}>
                        <button className={classes.login} onClick={this.openModalOnClick('login')}>  Login  </button>
                        <button className={classes.signup} onClick={this.openModalOnClick('signup')}> Sign Up </button>
                        <FontAwesomeIcon onClick = {this.toggle} className={classes.userIcon} icon={faUserNinja} />
                        <ul className={menuClasses.join(' ')}>
                            <li><FontAwesomeIcon className={classes.userIconList} icon={faSignInAlt} /> <span> Sign In </span> </li>
                            <li><FontAwesomeIcon className={classes.userIconList} icon={faCog} /><span> Dashboard </span> </li>
                        </ul>                     
                    </div>
                  ) 
              }

            </div>

        )
    }
}


export default SessionControls