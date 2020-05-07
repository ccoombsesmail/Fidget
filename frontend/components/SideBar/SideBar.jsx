import React from 'react'
import classes from './SideBar.module.css'
import {connect} from 'react-redux'
import { requestChannels } from '../../actions/channel_actions'
import SideBarItem from './SideBarItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faPlayCircle, faTv, faToiletPaper, faBeer } from '@fortawesome/free-solid-svg-icons'

class SideBar extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.requestChannels()
    }


    render() {
        
        return (

            <div id="sidebar" className = {classes.sideBar}>
                {
                    this.props.channels ? (
                        this.props.channels.map((channel, idx) => {
                           return <SideBarItem channel = {channel} key = {idx} users = {this.props.users}/> 
                        })
                    ) : null           

                }
                {/* 
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
                </div> */}

            </div>

        )
    }

}




const mSTP = state => {
    return {
        channels: Object.values(state.entities.channels),
        users: state.entities.users
    }
}


const mDTP = dispatch => {
    return {
        requestChannels: () => dispatch(requestChannels())
    }
}



export default connect(mSTP,mDTP)(SideBar)