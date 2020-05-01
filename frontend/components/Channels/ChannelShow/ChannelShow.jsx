import React from 'react'
import classes from './ChannelShow.module.css'
import ChatRoom from '../../ChatRoom/ChatRoom'


const ChannelShow= (props) => {

    
    return (
        <div className={classes.channelWrapper}>
            <div className={classes.channelContents}>
            <nav> hell </nav> 
            <video className = {classes.videoPlayer} > </video>
            </div>
            <div className={classes.right}>
                .
            </div>
            <ChatRoom />
        </div>
    )
}


// channelId = { props.location.state['id'] }




export default ChannelShow