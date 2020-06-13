import React from 'react'
import classes from './ChannelFollowers.module.css'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { requestFollowedChannels } from '../../actions/follow_actions'

class ChannelFollowers extends React.Component {

    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.requestFollowedChannels(this.props.match.params.channelId)
    }

    render() {

        return (
            <div className={classes.followersWrapper}>
               {
                this.props.channels.map((channel) => {
                    return ( 
                        <div className={classes.channelWrapper}>
                        <img src={channel.logoUrl} alt=""/>
                        <span>{channel.channelName}</span>
                        </div>
                    )
                })
               }
            </div>
        )
    }

}


const mSTP = (state) => {
    const channels = state.entities.channels.followedChannels ? Object.values(state.entities.channels.followedChannels) : []
    return {
        channels: channels
    }
}

const mDTP = (dispatch) => {
    return {
        requestFollowedChannels: (channelId) => dispatch(requestFollowedChannels(channelId))
    }
}

export default withRouter(connect(mSTP, mDTP)(ChannelFollowers))