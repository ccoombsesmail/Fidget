import React from "react";
import { withRouter } from 'react-router-dom'
import classes from './MessageForm.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faSmileBeam } from '@fortawesome/free-solid-svg-icons'
import EmojiMenu from "./EmojiMenu";

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            body: "",
            showMenu: false,
        };

        this.toggle = this.toggle.bind(this)
        this.colors = ["#A86DFF", "0D6F86", "#1C6BBA", "#851F20", "#54BC75", "#DB80E1"]
        this.usernameColor = this.colors[Math.floor(Math.random() * 6)]
    }



    update(field) {
        return e => {
        if (!this.state.showEmoji) {
            this.setState({ [field]: e.currentTarget.value, left: this.state.left + 7 });
        } else {
            this.setState({ [field]: e.currentTarget.value});
        }
    }
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.currentUser === undefined) {
            this.props.openModal("login")
        } else {
            let userId = this.props.currentUser.id
          console.log(App.cable.subscriptions.subscriptions)
            App.cable.subscriptions.subscriptions[3].speak({ message: this.state.body, channelName: this.props.channelName, user_id: userId, color: this.usernameColor });
        }

        this.setState({body: ''})
   
    }

    toggle() {
        this.setState({showMenu: !this.state.showMenu})
    }
  

    render() {

        return (
            <div className={classes.messageFormWrapper}>
                <EmojiMenu show = {this.state.showMenu} /> 

                <form className={classes.messageForm} onSubmit={this.handleSubmit.bind(this)}>
                    <div className = {classes.emojiInputWrapper} > 
                    <input id= "messageSubmit" className={classes.messageSubmit}
                        type="text"
                        value={this.state.body}
                        onChange={this.update("body")}
                        placeholder="Send a message"
                        autoComplete = "off"

                    />
                  
                        <div onClick = {this.toggle} className={classes.emojiBtn}>  
                            <FontAwesomeIcon  icon={faSmileBeam} />
                        </div>

                    </div>
                  

                <div className={classes.submitButtonWrapper}>
                    <div className={classes.pointIconWrapper}> 
                        <FontAwesomeIcon className={classes.pointIcon} icon={faCircleNotch} />
                    </div>

                    <button type= 'submit' className={classes.chatButton}>
                            Chat
                    </button>
                </div>
                </form>
            </div>
        );
    }
}


export default withRouter(MessageForm);
