import React from 'react'
import classes from './Stream.module.css'
import { connect } from 'react-redux'
import { requestChannel } from '../../actions/channel_actions'
import { broadcastData, BROADCAST, LEAVE_CALL, CANDIDATE, OFFER, ANSWER, WATCHER, PEER_DISCONNECT, ice } from '../../util/stream_util'


class Stream extends React.Component {

    constructor(props){
        super(props)
        this.peerConnections = {}
        this.userId = props.currentUser.id
        console.log(this.userId)
        console.log("heu")
    }


    componentDidMount() {
        this.video = document.getElementById("local-video")
        this.props.requestChannel(this.props.match.params.channelId).then(() => {
            navigator.mediaDevices.getUserMedia({ audio: false, video: true })
                .then(stream => {
                    this.localStream = stream;
                    document.getElementById("local-video").srcObject = stream;
                }).catch(error => { console.log(error) })
        }).then(this.joinCall())
    }




    joinCall() {

        App.cable.subscriptions.create(
            { channel: "StreamChannel" },
            {
                connected: () => {
                    broadcastData({ type: BROADCAST, from: this.userId })
                },
                received: data => {
                    console.log("RECEIVED: ", data);
                    if (data.id === this.userId) return
                    switch (data.type) {
                        case WATCHER:
                            console.log("hergerhasdfasdfasd")
                            return this.addPeerConnection(data)
                        case CANDIDATE:
                            return this.addCandidate(data)
                        case ANSWER:
                            return this.handleAnswer(data)
                        case PEER_DISCONNECT:
                            return this.handlePeerDisconnect(data)
                        case LEAVE_CALL:
                            return this.removeUser(data)
                        default:
                            return;
                    }
                },
            })
    }

    handlePeerDisconnect(data) {
        this.peerConnections[data.id].close();
        delete peerConnections[data.id];
    }

    addCandidate(data) {
        this.peerConnections[data.id].addIceCandidate(new RTCIceCandidate(data.candidate));

    }

    handleAnswer(data) {
        this.peerConnections[data.id].setRemoteDescription(data.description);

    }

    addPeerConnection(data) {

        const peerConnection = new RTCPeerConnection(ice)
        this.peerConnections[data.id] = peerConnection

        let stream = this.video.srcObject
        stream.getTracks().forEach(track => peerConnection.addTrack(track, stream))

        peerConnection.onicecandidate = (event) => {
            if (event.candidate) {
                broadcastData({ type: CANDIDATE, id: data.id, event: event.candidate })
                // socket.emit("candidate", data.id, event.candidate);
            }
        }

        peerConnection
            .createOffer()
            .then(sdp => peerConnection.setLocalDescription(sdp))
            .then(() => {
                broadcastData({ type: OFFER, id: data.id, description: peerConnection.localDescription })
                // socket.emit("offer", id, peerConnection.localDescription);
            });
    }


    render() {
        return (

            <video className={classes.videoPlayer} id="local-video" autoPlay controls></video>


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


export default connect(mSTP, mDTP)(Stream)

