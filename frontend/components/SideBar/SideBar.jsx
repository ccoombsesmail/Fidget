import React from 'react'
import classes from './SideBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faPlayCircle, faTv, faToiletPaper, faBeer } from '@fortawesome/free-solid-svg-icons'

class SideBar extends React.Component {
    constructor(props) {
        super(props)

    }


    render() {

        return (

            <div id="sidebar" className = {classes.sideBar}>

                <div className={classes.sideBarItemContainer}> 
                    <FontAwesomeIcon className={classes.sideBarItem} icon={faTv} /><h6> Placholder </h6> 
                </div>
                <div className={classes.sideBarItemContainer}>
                    <FontAwesomeIcon className={classes.sideBarItem} icon={faToiletPaper} /><h6> Placholder </h6>
                </div>
                <div className={classes.sideBarItemContainer}>
                    <FontAwesomeIcon className={classes.sideBarItem} icon={faBeer} /><h6> Placholder </h6>
                </div>    
                
                <div className={classes.sideBarItemContainer}> 
                    <FontAwesomeIcon className={classes.sideBarItem} icon={faPlayCircle} /><h6> Placholder </h6> 
                </div>
                <div className={classes.sideBarItemContainer}>
                    <FontAwesomeIcon className={classes.sideBarItem} icon={faPlayCircle} /><h6> Placholder </h6>
                </div>
                <div className={classes.sideBarItemContainer}>
                    <FontAwesomeIcon className={classes.sideBarItem} icon={faPlayCircle} /><h6> Placholder </h6>
                </div>

            </div>

        )
    }

}







export default SideBar