import React from 'react'
import classes from './ChannelShow.module.css'
import ChatRoom from '../../ChatRoom/ChatRoom'


const ChannelShow= (props) => {

    
    return (
        <div className={classes.channelWrapper}> 
            <ChatRoom />
        </div>
    )
}


// channelId = { props.location.state['id'] }




export default ChannelShow