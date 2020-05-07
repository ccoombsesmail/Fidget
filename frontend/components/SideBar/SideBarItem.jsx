import React from 'react'
import classes from './SideBar.module.css'
import {withRouter} from 'react-router-dom'

const SideBarItem = ({channel, users, history}) => {
    
    const navToChannel = () => {
        history.push(`/channels/${channel.id}/${users[channel.ownerId].username}/home`)
    }
    

    return (
        <div onClick = {navToChannel} className={classes.sideBarItemContainer}>
            <img src={channel.logoUrl} className = {classes.logo} />  
            <div className = {classes.channelDetails}> 
                <h4> {users[channel.ownerId].username}</h4> 
            </div>
            <h5>Offline</h5>
        </div>
    )
}




export default withRouter(SideBarItem);