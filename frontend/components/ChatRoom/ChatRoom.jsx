import React from 'react'

import classes from './ChatRoom.module.css'

import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {openModal} from '../../actions/modal_actions'

import MessageForm from './MessageForm/MessageForm'


class ChatRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
        };
        this.bottom = React.createRef();
    }


    componentDidMount() {

        // Subscribe to a channel with a given id. Define methods to receive and send data from/to socket
        App.cable.subscriptions.create(
            {channel: "ChatRoomsChannel", id: this.props.match.params.channelName},

            {
                received: data => {
                    this.setState({
                        messages: [...this.state.messages, [data.message, data.username]],
                        // emojiUrl: data.url
                    })
                },
                speak: function(data) {
                    return this.perform("speak", data)
                }

            }
        )
    }

    componentDidUpdate(prevProps) {

        if (prevProps.match.params.channelName !== this.props.match.params.channelName) {
            
            App.cable.disconnect();
            App.cable.subscriptions.create(
                { channel: "ChatRoomsChannel", id: this.props.match.params.channelName },
                {
                    received: data => {
                        this.setState({
                            messages: [...this.state.messages, [data.message, data.username]]
                        });
                    },
                    speak: function (data) {
                        return this.perform("speak", data);
                    }
                }
            );
            this.setState({ messages: [] })

        }

        if (this.bottom.current !== null) {
            this.bottom.current.scrollIntoView();
        }
    }

    render() {
       
        const messageList = this.state.messages.map((message, idx) => {
            return (
                <li className = {classes.messageLi} key={idx}>
                    <p> 
                        <span className={classes.username}> {`${message[1]}:   `} </span> 
                         <span className={classes.messageBody}> {`${message[0]}`} </span> 
                         </p>
                    <div ref={this.bottom} />
                </li>
            );
        });


        return (
            // <div id= "chatroomWrapper" className={classes.chatroomWrapper}>
                <div className={classes.chatroomContainer}>
                    
                    <div className = {classes.chatTitle}>STREAM CHAT {this.props.channelId}</div> 
                    <div id="messageList" className = {classes.messageList}>
                        {messageList}
                    </div>
                    <MessageForm openModal={this.props.openModal} currentUser={this.props.currentUser} channelName={this.props.match.params.channelName} />

                </div>
            // </div>
        );
    }
}




const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.currentUserId]
    }
}

const mDTP = dispatch => {
    return {
        openModal: (form) => dispatch(openModal(form))
    }

}



export default withRouter(connect(mSTP, mDTP)(ChatRoom))