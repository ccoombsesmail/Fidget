import React from 'react'
import classes from './SideBar.module.css'


const SideBarItem = ({channel, users}) => {
    
    return (
        <div className={classes.sideBarItemContainer}>
            <img src={channel.logoUrl} className = {classes.logo} />  
            <div className = {classes.channelDetails}> 
                <h4> {users[channel.ownerId].username}</h4>
            </div>
        </div>
    )
}




export default SideBarItem;