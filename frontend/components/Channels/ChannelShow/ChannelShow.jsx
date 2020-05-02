import React from 'react'
import classes from './ChannelShow.module.css'
import ChatRoom from '../../ChatRoom/ChatRoom'
import {withRouter} from 'react-router-dom'

const ChannelShow= (props) => {

    function clickHandler() {
        let channelName = props.match.params.channelName
        let vodId = 1
        props.history.push(`/channels/${channelName}/${vodId}`)
    }

    return (
        <div className={classes.channelWrapper}>
            <div className={classes.channelContents}>
            <nav> 
            <button onClick = {clickHandler.bind(this)}> Vods </button>
            </nav> 
            </div>
            <div className={classes.right}>
                .
            </div>
            <ChatRoom />
        </div>
    )
}


// channelId = { props.location.state['id'] }



export default withRouter(ChannelShow)