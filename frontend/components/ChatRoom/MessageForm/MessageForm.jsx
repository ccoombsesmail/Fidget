import React from "react";
import { withRouter } from 'react-router-dom'
import classes from './MessageForm.module.css'

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
                <div className={classes.submitButton}> </div>
            </div>
        );
    }
}


export default withRouter(MessageForm);
