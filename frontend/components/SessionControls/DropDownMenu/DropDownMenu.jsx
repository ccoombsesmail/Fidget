import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo, faCog, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import classes from './DropDownMenu.module.css'



const DropDownMenu = ({currentUser, showMenu, logout, login, toggle}) => {

   

    let menuClasses = [classes.dropDown];
    if (showMenu) {
        menuClasses.push(classes.show)
    } else {
        menuClasses.push(classes.hide)
    }

    function loginClick() {
        login()
        toggle()
    }

    function logoutClick() {
        logout()
        toggle()
    }


    return (

        currentUser ? (

        <ul className={menuClasses.join(' ')} onClick={e => e.stopPropagation()}>
            <li><FontAwesomeIcon className={classes.userIconList} icon={faVideo} /> <span> Channel </span> </li>
            <li><FontAwesomeIcon className={classes.userIconList} icon={faCog} /><span> Dashboard </span> </li>
            <li onClick={logoutClick}><FontAwesomeIcon className={classes.userIconList} icon={faSignOutAlt} /><span> Sign Out </span> </li>
        </ul>    

        ) : (

        <ul className={menuClasses.join(' ')} onClick={e => e.stopPropagation()}>
            <li><FontAwesomeIcon className={classes.userIconList} icon={faCog} /><span> Dashboard </span> </li>
            <li onClick={loginClick}><FontAwesomeIcon className={classes.userIconList} icon={faSignInAlt} /> <span> Sign In </span> </li>
        </ul>   
        )

    )
}



export default DropDownMenu;