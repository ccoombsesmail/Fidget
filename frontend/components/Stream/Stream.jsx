
import React from 'react'
import { connect } from 'react-redux'
import classes from './Stream.module.css'
import { requestChannel } from '../../actions/channel_actions'
import { broadcastData, BROADCAST, CANDIDATE, OFFER, ANSWER, WATCHER, PEER_DISCONNECT, ice } from '../../util/stream_util'


class Stream extends React.Component {

  constructor(props) {
    super(props)
    this.peerConnections = {}
    if (props.currentUser) {
      this.userId = props.currentUser.id
    } else {
      this.userId = Math.floor(Math.random() * 10000)
    }
  }


  componentDidMount() {
    if (navigator.mediaDevices === undefined) {
      navigator.mediaDevices = {}
    }

    if (navigator.mediaDevices.getUserMedia === undefined) {
      navigator.mediaDevices.getUserMedia = (constraints) => {
        // First get ahold of the legacy getUserMedia, if present
        const getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        if (!getUserMedia) {
          return Promise.reject(new Error('getUserMedia is not implemented in this browser'))
        }

        // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
        return new Promise((resolve, reject) => {
          getUserMedia.call(navigator, constraints, resolve, reject)
        })
      }
    }


      this.video = document.getElementById("local-video")
      this.props.requestChannel(this.props.match.params.channelId).then(() => {

      navigator.mediaDevices.getUserMedia({ audio: true, video: true })
        .then((stream) => {
          this.localStream = stream
          // Older browsers may not have srcObject
          if ('srcObject' in this.video) {
            this.video.srcObject = stream
          } else {
            // Avoid using this in new browsers, as it is going away.
            this.video.src = window.URL.createObjectURL(stream)
          }
          this.video.onloadedmetadata = () => {
            this.video.play()
          }
        }).then(() => this.beginBroadcast())
        .catch((err) => {
          console.log(err.name + ": " + err.message)
        })
    })
  }

  beginBroadcast() {
    App.cable.subscriptions.create(
      { channel: 'StreamChannel' },
      {
        connected: () => {
          broadcastData({ type: BROADCAST, id: this.userId })
        },
        received: (data) => {
          console.log("RECEIVED: ", data);
          if (data.to !== this.userId) return
          switch (data.type) {
            case WATCHER:
              return this.addPeerConnection(data)
            case CANDIDATE:
              return this.addCandidate(data)
            case ANSWER:
              return this.handleAnswer(data)
            case PEER_DISCONNECT:
              return this.handlePeerDisconnect(data)
            default:
              return
          }
        },
      },
    )
  }

  handlePeerDisconnect(data) {
    this.peerConnections[data.id].close()
    delete peerConnections[data.id]
  }

  addCandidate(data) {
    this.peerConnections[data.id].addIceCandidate(new RTCIceCandidate(data.candidate))
  }

  handleAnswer(data) {
    this.peerConnections[data.id].setRemoteDescription(data.description)
  }

  addPeerConnection(data) {
    const peerConnection = new RTCPeerConnection(ice)
    this.peerConnections[data.id] = peerConnection

    const stream = this.video.srcObject
    stream.getTracks().forEach((track) => peerConnection.addTrack(track, stream))

    peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        broadcastData(
          {
            type: CANDIDATE, id: this.userId, to: data.id, candidate: event.candidate,
          },
        )
      }
    }

    peerConnection
      .createOffer()
      .then((sdp) => peerConnection.setLocalDescription(sdp))
      .then(() => {
        broadcastData(
          {
            type: OFFER, id: this.userId, to: data.id, description: peerConnection.localDescription,
          },
        )
      })
  }


  render() {
    return (
      <video className={classes.videoPlayer} id="local-video" autoPlay controls />
    )
  }
}


const mSTP = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.currentUserId]
  return {
    currentUser,
    currentChannel: state.entities.channels[ownProps.match.params.channelId],
  }
}

const mDTP = (dispatch) => {
  return {
    requestChannel: (channelId) => dispatch(requestChannel(channelId)),
  }
}


export default connect(mSTP, mDTP)(Stream)
