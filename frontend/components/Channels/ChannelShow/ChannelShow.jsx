import React from 'react'
import classes from './ChannelShow.module.css'
import ChatRoom from '../../ChatRoom/ChatRoom'
import {withRouter, Switch, Route} from 'react-router-dom'
import ChannelNavs from './ChannelNavs'
import ChannelVideosIndex from '../../Vods/VodsIndex/ChannelVideosIndex'

const ChannelShow= (props) => {

    // function clickHandler() {
    //     let channelName = props.match.params.channelName
    //     let vodId = 1
    //     props.history.push(`/channels/${channelName}/${vodId}`)
    // }

    return (
        <div className={classes.channelWrapper}>
            <div className={classes.channelContents}>
            <nav> 
                <div className = {classes.leftNav}>
                    .
                </div>
                <ChannelNavs channelName = {props.match.params.channelName} />
                <div className = {classes.rightNav}>
                    .
                </div>   
            {/* <button onClick = {clickHandler.bind(this)}> Vods </button> */}
            </nav>
                 <Switch>
                    <Route path = "/channels/:channelName/videos" component = {ChannelVideosIndex} />
                 </Switch>
            </div>

            <div className={classes.right}>
                
            </div>
            <ChatRoom />
        </div>
    )
}


// channelId = { props.location.state['id'] }



export default withRouter(ChannelShow)