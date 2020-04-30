import React from "react";
import { withRouter } from 'react-router-dom'
import classes from './MessageForm.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faSmileBeam, faSmile } from '@fortawesome/free-solid-svg-icons'
import EmojiMenu from "./EmojiMenu";

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            body: "",
            showMenu: false,
            left: 2,
            showEmoji: false,
            position: 'absolute' 
        };

        this.toggle = this.toggle.bind(this)
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
        // if (this.props.currentUser === undefined) {
        //     this.props.history.push('/login')
        // } else {
        let userId = this.props.currentUser.id
        App.cable.subscriptions.subscriptions[1].speak({ message: this.state.body, channelName: this.props.channelName, user_id: userId });

        // }
        this.setState({ 
            body: "", showEmoji: false, left: 2});
    }

    toggle() {
        this.setState({showMenu: !this.state.showMenu})
    }
    displayEmoji(){
        this.setState({showEmoji: true, body: this.state.body + '        '})
    }


    render() {
        // console.log(twitchEmoji.parse('spicey memes Kappa'))

        return (
            <div className={classes.messageFormWrapper}>
                <EmojiMenu showEmoji ={this.displayEmoji.bind(this)} show = {this.state.showMenu} /> 

                <form className={classes.messageForm} onSubmit={this.handleSubmit.bind(this)}>
                    <div className = {classes.emojiInputWrapper} > 
                    <input id= "messageSubmit" className={classes.messageSubmit}
                        type="text"
                        value={this.state.body}
                        onChange={this.update("body")}
                        placeholder="Send a message"

                    />
                        { !this.state.showEmoji ? null : 
                        <img style = {{position: 'absolute', left: this.state.left + 'px', width: '35px', height: '35px'}} src="https://i.ibb.co/Km2YDrb/UIHere.png" />
                        }
                        <div onClick = {this.toggle} className={classes.emojiBtn}>  
                            <FontAwesomeIcon  icon={faSmileBeam} />
                        </div>

                    </div>
                    {/* <input  type="submit" /> */}
                <div className={classes.submitButtonWrapper}>
                    <FontAwesomeIcon className={classes.pointIcon} icon={faCircleNotch} />
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
