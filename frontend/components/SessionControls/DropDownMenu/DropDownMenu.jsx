import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo, faCog, faSignInAlt, faSignOutAlt, faUserNinja } from '@fortawesome/free-solid-svg-icons'
import classes from './DropDownMenu.module.css'



const DropDownMenu = ({currentUser, showMenu, logout, login, toggle, history, currentChannel}) => {

   

    let menuClasses = [classes.dropDown];
    if (showMenu) {
        menuClasses.push(classes.show)
    } else {
        menuClasses.push(classes.hide)
    }

    function handleClick(type) {
        switch (type) {
            case 'login':
                login()
                break;
            case 'logout':
                logout()
                break;
            case 'showChannel':
                history.push(`/channels/${currentChannel.id}/${currentUser.username}`)
                break;
            case 'dashboard':
                history.push(`/${currentUser.username}/dashboard`)
                break;
            default:
                break;
        }
        toggle()

    }


    return (

        currentUser ? (

        <ul className={menuClasses.join(' ')} onClick={e => e.stopPropagation()}>
            <div className={classes.topDiv}> 
                {/* <FontAwesomeIcon className={classes.userIconMain} icon={faUserNinja} /> */}
                <div onClick={() => handleClick('dashboard')}  className={classes.userIconWrapper}> 
                    <img className={classes.userIcon} src={ currentChannel ? currentChannel.logoUrl : null} /> 
                </div>
                <h5> {currentUser.username} </h5>
            </div>
            <hr/>
            <li onClick = {() => handleClick('showChannel')}><FontAwesomeIcon className={classes.userIconList} icon={faVideo} />  <span> Channel </span> </li> 
            <li onClick = {() => handleClick('dashboard')}><FontAwesomeIcon className={classes.userIconList} icon={faCog} /><span> Dashboard </span> </li>
            <li onClick={() => handleClick('logout')}><FontAwesomeIcon className={classes.userIconList} icon={faSignOutAlt} /><span> Sign Out </span> </li>
        </ul>    

        ) : (

        <ul style = {{height: '150px'}} className={menuClasses.join(' ')} onClick={e => e.stopPropagation()}>
            {/* <li><FontAwesomeIcon className={classes.userIconList} icon={faCog} /><span> Dashboard </span> </li> */}
            <li onClick={() => handleClick('login')}><FontAwesomeIcon className={classes.userIconList} icon={faSignInAlt} /> <span> Sign In </span> </li>
        </ul>   
        )

    )
}



export default withRouter(DropDownMenu);