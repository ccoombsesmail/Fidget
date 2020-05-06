import React from 'react'
import {connect} from 'react-redux'
import classes from './ChannelShow.module.css'
import {withRouter, Switch, Route} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartbeat } from '@fortawesome/free-solid-svg-icons'
import {requestChannel} from '../../../actions/channel_actions'
import {createFollow, deleteFollow} from '../../../actions/follow_actions'
// Components
import ChatRoom from '../../ChatRoom/ChatRoom'
import ChannelNavs from './ChannelNavs'
import ChannelVideosIndex from '../../Vods/VodsIndex/ChannelVideosIndex'
import VodShow from '../../Vods/VodShow/VodShow'
import ChannelFollowers from '../../ChannelFollowers/ChannelFollowers'
import ChannelHome from '../../ChannelHome/ChannelHome'
import FollowButton from './FollowButton'



class ChannelShow extends React.Component  {
    constructor(props){
        super(props)

        this.followChannel = this.followChannel.bind(this)
        this.unfollowChannel = this.unfollowChannel.bind(this)
      
    }

    componentDidMount() {
        this.props.requestChannel(this.props.match.params.channelId)
    }

  
    
    followChannel() {
        if (this.props.currentUserId) {
            this.props.createFollow({channel_id: this.props.channel.id, user_id: this.props.currentUserId})
        }
    }

    unfollowChannel() {
        if (this.props.currentUserId) {
            this.props.deleteFollow(this.props.channel.id)
        }
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
                <ChannelNavs channelId = {this.props.match.params.channelId} channelName = {this.props.match.params.channelName} />
                
                
                <FollowButton 
                    followChannel={this.followChannel} 
                    unfollowChannel = {this.unfollowChannel} 
                    currentUserId = {this.props.currentUserId}  
                    channel = {this.props.channel}  
                    follows = {this.props.follows}
                    /> 

                 
            </nav>
                 <Switch>
                    <Route path="/channels/:channelId/:channelName/videos/:vodId" component={VodShow} />
                    <Route path= "/channels/:channelId/:channelName/videos" component = {ChannelVideosIndex} />
                    <Route path="/channels/:channelId/:channelName/followers" component={ChannelFollowers} />
                    <Route path="/channels/:channelId/:channelName/home" component={ChannelHome} />

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
    let currentUserId = state.session.currentUserId
    let follows
    currentUserId ? follows = state.entities.users[currentUserId].follows : follows = [] 
    return {
        channel: state.entities.channels[ownProps.match.params.channelId],
        currentUserId: currentUserId,
        follows: follows
    }

}

const mDTP = (dispatch) => {

    return {
        requestChannel: (channelId) => dispatch(requestChannel(channelId)),
        createFollow: (follow) => dispatch(createFollow(follow)),
        deleteFollow: (channelId) => dispatch(deleteFollow(channelId))
    }
}




export default withRouter(connect(mSTP, mDTP)(ChannelShow))