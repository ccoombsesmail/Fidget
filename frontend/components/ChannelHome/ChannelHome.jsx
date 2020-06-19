/* eslint-disable */

import React from 'react'
import classes from './ChannelHome.module.css'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {requestChannel } from '../../actions/channel_actions'
import { broadcastData, PEER_DISCONNECT, EXCHANGE, CANDIDATE, OFFER, WATCHER, ANSWER, ice } from '../../util/stream_util'


class ChannelHome extends React.Component {

  constructor(props) {
    super(props)
    
    if (props.currentUser) {
      this.userId = props.currentUser.id
    } else {
      this.userId = Math.floor(Math.random() * 10000)
    }
    
    this.leaveCall = this.leaveCall.bind(this)
    this.goLive = this.goLive.bind(this)
    }


    componentWillUnmount() {
      this.leaveCall()
    }

  componentDidMount() {
    this.video = document.getElementById('local-video')
    this.peerConnection = null
    this.props.requestChannel(this.props.match.params.channelId).then(() => {

    })
    const { currentUser } = this.props

    if (currentUser === undefined || currentUser.username !== this.props.match.params.channelName) {
      App.cable.subscriptions.create(
        { channel: "StreamChannel" },
        {
          connected: () => {
            broadcastData({ type: WATCHER, id: this.userId, to: Number(this.props.match.params.channelId) })
          },
          received: data => {
            console.log("RECEIVED: ", data);

            if (data.to !== this.userId) return
            switch (data.type) {
              case OFFER:
                return this.handleOffer(data)
              case EXCHANGE:
                if (data.to !== this.userId) return;
                return this.exchange(data)
              case CANDIDATE:
                return this.addCandidate(data)
              default:
                return;
            }
          },
        })
      broadcastData({ type: WATCHER, id: this.userId, to: Number(this.props.match.params.channelId) })
    }
  }



  addCandidate(data) {
    this.peerConnection
      .addIceCandidate(new RTCIceCandidate(data.candidate))
      .catch(e => console.error(e))
  }

  handleOffer(data) {
    this.peerConnection = new RTCPeerConnection(ice);
    this.peerConnection
      .setRemoteDescription(data.description)
      .then(() => this.peerConnection.createAnswer())
      .then(sdp => this.peerConnection.setLocalDescription(sdp))
      .then(() => {
        broadcastData({ type: ANSWER, id: this.userId, to: data.id, description: this.peerConnection.localDescription  })
        // socket.emit("answer", id, peerConnection.localDescription);
      });

    this.peerConnection.ontrack = event => {
      this.video.srcObject = event.streams[0]
    };
    this.peerConnection.onicecandidate = event => {
      if (event.candidate) {
        broadcastData({ type: CANDIDATE, id: this.userId, to: data.id, candidate: event.candidate })
        // socket.emit("candidate", id, event.candidate);
      }
    };
  }

 



  leaveCall() {
    if (this.peerConnection) {
      this.peerConnection.close()
      this.video.srcObject.getTracks()
        .forEach(function (track) { track.stop() })

      this.video.srcObject = null;
      // App.cable.subscriptions.subscriptions = []
      broadcastData({ type: PEER_DISCONNECT, id: this.userId, to: this.props.match.params.channelId })
    }
  }

  goLive() {
    this.props.history.push(`/channels/${this.props.match.params.channelId}/${this.props.currentChannel.channelName}/stream`)
  }

 

    render() {
        const {currentUser, currentChannel} = this.props
        return (
            <div>
              {
                currentUser && currentChannel && currentUser.username === currentChannel.channelName ? (
                  <div className = {classes.btnWrapper}><button onClick = {this.goLive}>Go Live</button></div>
                  ) : <video className={classes.videoPlayer} id="local-video" autoPlay controls> </video>
              }  
            </div>
        )
    }
}


const mSTP = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.currentUserId]
  return {
    currentUser: currentUser,
    currentChannel: state.entities.channels[ownProps.match.params.channelId]
  }
}

const mDTP = (dispatch) => {
  return {
    requestChannel: (channelId) => dispatch(requestChannel(channelId))
  }
}

// state.entities.channels[ownProps.match.params.channelId]

export default withRouter(connect(mSTP, mDTP)(ChannelHome))