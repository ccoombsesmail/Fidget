import React from 'react'
import classes from './SideBar.module.css'
import {withRouter} from 'react-router-dom'

const SideBarItem = ({channel, users, history}) => {
    
    const navToChannel = () => {
        if (users && channel) {
            history.push(`/channels/${channel.id}/${users[channel.ownerId].username}/home`)
        }
    }
    

    return (
        <div onClick = {navToChannel} className={classes.sideBarItemContainer}>
            <img src={channel.logoUrl} className = {classes.logo} />  
            <div className = {classes.channelDetails}> 
                {
                    Object.keys(users).length > 1 && users[channel.ownerId] ?   // First request returns specific channel info and user info. Need to wait for second request to get followed channels/users for sidebar
                    <h4> {users[channel.ownerId].username}</h4> : null
                }   
            </div>
            <h5>Offline</h5>
        </div>
    )
}




export default withRouter(SideBarItem);