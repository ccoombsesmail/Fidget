/* eslint-disable */
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { requestChannels } from '../../actions/channel_actions'
import { requestVods, clearVods } from '../../actions/vod_actions'
import classes from './ChannelIndex.module.css'
import ChannelIndexItem from './ChannelIndexItem/ChannelIndexItem'

class ChannelIndex extends React.Component {


  componentDidMount() {
    const { match, requestChannels } = this.props
    if (match.path === '/') {
      requestChannels({ firstVods: true })
    } else {
      requestChannels({ allChannels: true })
    }
  }

  componentWillUnmount() {
    this.props.clearVods()
  }


  render() {
    return (
      <div className={classes.channelsContainer}>
        {
        this.props.vods.map((vod, idx) => {
          const channel = this.props.channels[vod.channelId]
          let user
          channel ? user = this.props.users[channel.ownerId] : user = null
          return <ChannelIndexItem key={vod.id} vod={vod} user={user} channel={channel} />
        }, this)
        }
      </div>
    )
  }
}

const mSTP = (state) => {
  return {
    channels: state.entities.channels,
    users: state.entities.users,
    vods: Object.values(state.entities.vods),
  }
}


const mDTP = (dispatch) => {
  return {
    requestChannels: (filter) => dispatch(requestChannels(filter)),
    requestVods: () => dispatch(requestVods()),
    clearVods: () => dispatch(clearVods()),
  }
}


export default withRouter(connect(mSTP, mDTP)(ChannelIndex))
