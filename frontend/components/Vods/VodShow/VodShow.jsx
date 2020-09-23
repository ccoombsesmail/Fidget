import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { requestVod } from '../../../actions/vod_actions'
import classes from './VodShow.module.css'

class VodShow extends React.Component {

  componentDidMount() {
    this.props.requestVod(this.props.match.params.vodId)
  }

  render() {
    return (
      <>
        {
        this.props.vod ? (
          <video className={classes.videoPlayer} controls autoPlay>
            <source src={this.props.vod.videoUrl} />
          </video>
        ) : null
        }
      </>
    )
  }
}


const mSTP = (state, ownProps) => {
  return {
    vod: state.entities.vods[ownProps.match.params.vodId],
  }
}


const mDTP = (dispatch) => {
  return {
    requestVod: (vodId) => dispatch(requestVod(vodId)),
  }
}


export default withRouter(connect(mSTP, mDTP)(VodShow))
