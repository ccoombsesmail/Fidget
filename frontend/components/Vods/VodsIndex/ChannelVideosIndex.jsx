import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import classes from './ChannelVideosIndex.module.css'
import { requestVods, clearVods } from '../../../actions/vod_actions'
import VodIndexItem from './VodIndexItem'
/* eslint-disable */

class ChannelVideosIndex extends React.Component {


  componentDidMount() {
    this.props.requestVods({
      channel_id: this.props.match.params.channelId,
    })

  }

  componentWillUnmount() {
    this.props.clearVods()
  }

  render() {
    return (
      <div className={classes.indexWrapper}>
        <div className={classes.videoCountWrapper}>
          <h1>Videos </h1>
          <h1>{this.props.vods.length}</h1>
        </div>
        <hr />
        <div className={classes.vodsWrapper}>
          {
            this.props.vods.map((vod, idx) => {
              return <VodIndexItem key={idx} vod={vod} />
            })
          }
        </div>
      </div>
    )
  }
}


const mSTP = (state) => {
  return {
    vods: Object.values(state.entities.vods),
  }
}

const mDTP = (dispatch) => {
  return {
    requestVods: (filter) => dispatch(requestVods(filter)),
    clearVods: () => dispatch(clearVods()),
  }
}


export default withRouter(connect(mSTP, mDTP)(ChannelVideosIndex))
