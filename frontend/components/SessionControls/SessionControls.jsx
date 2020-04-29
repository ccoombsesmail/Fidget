import React from 'react'
import {Link} from 'react-router-dom'
import classes from './SessionControls.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserNinja } from '@fortawesome/free-solid-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import DropDownMenu from './DropDownMenu/DropDownMenu'





class SessionControls extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showMenu: false
        }

        this.openModalOnClick = this.openModalOnClick.bind(this)
        this.toggleMenu = this.toggleMenu.bind(this)
        this.toggle= this.toggle.bind(this)
        // this.iconRef = React.createRef();
    }

    componentDidMount() {
        document.body.addEventListener('click', this.toggleMenu);
        this.userIcon = document.querySelector("[data-icon='user-ninja'")
      
    }

    // componentDidUpdate(){ 
    //     if (this.state.showMenu === false) {
    //         document.body.removeEventListener('click', this.toggleMenu);
    //     }else {
    //         document.body.addEventListener('click', this.toggleMenu);
    //     }  
    // }

  
    componentDidUpdate() {
        this.userIcon = document.querySelector("[data-icon='user-ninja'")
        // this.userIcon.addEventListener('click', (e) => {
        //     this.toggleMenu()
        //     e.stopPropagation()
        // })       
        document.body.addEventListener('click', this.toggleMenu);

    }
    // componentWillUnmount() {
    //     document.body.removeEventListener('click', this.toggleMenu);
    // }

    openModalOnClick(type) {
        return () => {
            this.props.openModal(type)
        }
    }

    toggleMenu(e) {
        if (e.target === this.userIcon) {
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
                        
                        {/* <h2 className={classes.welcomeMessage}  > Welcome {this.props.currentUser.username}</h2>
                        <Link className={classes.logout} to = '/' onClick = {this.handleClick} >Logout</Link> */}
                            
                        <FontAwesomeIcon onClick={this.toggleMenu} className={classes.userIcon} icon={faUserNinja}  />
                        <DropDownMenu toggle={this.toggle} logout = {this.props.logout} currentUser = {this.props.currentUser} showMenu = {this.state.showMenu}/>
                    </div>
                  ) : (
                    <div className={classes.controlsWrapper}>

                        <button className={classes.signup} onClick={this.openModalOnClick('demo')}>  Demo </button>
                        <button className={classes.login} onClick={this.openModalOnClick('login')}>  Log In  </button>
                        <button className={classes.signup} onClick={this.openModalOnClick('signup')}> Sign Up </button>

                        <FontAwesomeIcon onClick={this.toggleMenu} className={classes.userIcon} icon={faUserNinja}  />
                        <DropDownMenu toggle={this.toggle} login={this.openModalOnClick('login')} currentUser={this.props.currentUser} showMenu={this.state.showMenu} />
                    </div>
                  ) 
              }

            </div>

        )
    }
}


export default SessionControls