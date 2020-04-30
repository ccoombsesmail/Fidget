import React from "react";
import { withRouter } from 'react-router-dom'
import classes from './MessageForm.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { body: "" };

    }



    update(field) {
        return e =>
            this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        // if (this.props.currentUser === undefined) {
        //     this.props.history.push('/login')
        // } else {
        let userId = this.props.currentUser.id
        App.cable.subscriptions.subscriptions[1].speak({ message: this.state.body, channelName: this.props.channelName, user_id: userId });

        // }
        this.setState({ body: "" });
    }


    render() {


        return (
            <div className={classes.messageFormWrapper}>
                <form className={classes.messageForm} onSubmit={this.handleSubmit.bind(this)}>
                    <input id= "messageSubmit" className={classes.messageSubmit}
                        type="text"
                        value={this.state.body}
                        onChange={this.update("body")}
                        placeholder="Send a message"

                    />
                    {/* <input  type="submit" /> */}
                </form>
                <div className={classes.submitButtonWrapper}>
                    <FontAwesomeIcon className={classes.pointIcon} icon={faCircleNotch} />
                    <button className={classes.chatButton}>
                            Chat
                    </button>
                </div>
            </div>
        );
    }
}


export default withRouter(MessageForm);
