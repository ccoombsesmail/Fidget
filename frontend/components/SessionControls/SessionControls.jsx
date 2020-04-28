import React from 'react'
import {Link} from 'react-router-dom'
import classes from './SessionControls.module.css'

class SessionControls extends React.Component {

    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
        this.openModalOnClick = this.openModalOnClick.bind(this)
    }

    handleClick() {
        this.props.logout()
    }

    openModalOnClick(type) {
        return () => {
            this.props.openModal(type)
        }
    }

    render() {

        return (

            <div>
              {
                  this.props.currentUser ? (  
                    <div className={classes.welcomeWrapper}>
                        <h2 className={classes.welcomeMessage}  > Welcome {this.props.currentUser.username}</h2>
                        <Link className={classes.logout} to = '/' onClick = {this.handleClick} >Logout</Link>
                    </div>
                  ) : (
                    <div>
                        <button className={classes.login} onClick={this.openModalOnClick('login')}>  Login  </button>
                        <button className={classes.signup} onClick={this.openModalOnClick('signup')}> Sign Up </button>
                    </div>

                  ) 
              }

            </div>

        )
    }
}


export default SessionControls