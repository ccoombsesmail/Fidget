import React from 'react'
import {connect} from 'react-redux'
import classes from './ChannelShow.module.css'
import ChatRoom from '../../ChatRoom/ChatRoom'
import {withRouter, Switch, Route} from 'react-router-dom'
import {requestChannel} from '../../../actions/channel_actions'
import ChannelNavs from './ChannelNavs'
import ChannelVideosIndex from '../../Vods/VodsIndex/ChannelVideosIndex'
import VodShow from '../../Vods/VodShow/VodShow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartbeat} from '@fortawesome/free-solid-svg-icons'


class ChannelShow extends React.Component  {
    constructor(props){
        super(props)
      
    }

    componentDidMount() {
        this.props.requestChannel(this.props.match.params.channelId)
    }
    
    render() { 
        
        return (
        <div className={classes.channelWrapper}>
            <div className={classes.channelContents}>
            <nav> 
                <div className = {classes.leftNav}>
                    { this.props.channel ? 
                    <div className={classes.userIconWrapper}> <img className={classes.userIcon} src={this.props.channel.logoUrl} /> </div>
                    : null
                    }   
                </div>
                <ChannelNavs channelName = {this.props.match.params.channelName} />
               
                    <div className = {classes.followWrapper}> 
                    <FontAwesomeIcon className={classes.followIcon} icon={faHeart} />
                    <h5>Follow</h5>
                    </div>
                 
            </nav>
                 <Switch>
                    <Route  path="/channels/:channelName/videos/:vodId" component={VodShow} />
                    <Route path = "/channels/:channelName/videos" component = {ChannelVideosIndex} />
                 </Switch>
            </div>

            <div className={classes.right}>
                
            </div>
            <ChatRoom />
        </div>
        )
    }
}


const mSTP = (state, ownProps) => {
    return {
        channel: state.entities.channels[ownProps.match.params.channelId]
    }

}

const mDTP = (dispatch) => {

    return {
        requestChannel: (channelId) => dispatch(requestChannel(channelId))
    }
}




export default withRouter(connect(mSTP, mDTP)(ChannelShow))