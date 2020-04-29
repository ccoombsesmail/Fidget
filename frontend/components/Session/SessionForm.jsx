import React from 'react'
import classes from './SessionForm.module.css'
import { withRouter } from 'react-router-dom'

import TabNavs from './TabNavs/TabsNav'
import ErrorBox from './ErrorBox/ErrorBox'
import Typewriter from 'typewriter-effect';


class SessionForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            passwordMatch: true 
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(type) {
        return (e) => {
            this.setState({[type]: e.currentTarget.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        if (this.state.confirmPassword !== this.state.password && this.props.formType === 'Sign Up') {
            
            this.setState({ passwordMatch: false })
        }else {
            this.props.processForm({
                username: this.state.username,
                password: this.state.password
            })
        }
    }

        // this.props.closeModal()


    render() {
        


        return (
            <div className = {classes.formWrapper}>
                {
                this.props.formType === "Sign Up" ? 
                <a className={classes.formMessage} href="https://fontmeme.com/twitch-logo-font/"><img src="https://fontmeme.com/permalink/200429/10e3b11e54c3e7af300891419c265af8.png" alt="twitch-logo-font" border="0"/></a> :
                <a className={classes.formMessage} href="https://fontmeme.com/twitch-logo-font/"><img src="https://fontmeme.com/permalink/200429/1e5f1ba7db348c186573e62f09c03de8.png" alt="twitch-logo-font" border="0"/></a>
                }

                {/* <h2 className= {classes.formMessage}>{this.props.formType} To Fidget</h2> */}

                <TabNavs clearErrors = {this.props.clearErrors}  navToOtherForm={this.props.navToOtherForm} currentForm={this.props.formType}  />
                <ErrorBox navToOtherForm={this.props.navToOtherForm} errors={this.props.errors} passwordMatch={this.state.passwordMatch} />

                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('Hello World!')
                            .callFunction(() => {
                                console.log('String typed out!');
                            })
                            .pauseFor(2500)
                            .deleteAll()
                            .callFunction(() => {
                                console.log('All strings were deleted');
                            })
                            .start();
                    }}
                />

                <form onSubmit={this.handleSubmit} className={classes.form}>

                    <label className={classes.formLabel}>
                        <h4>Username</h4>
                        <input className = {classes.formInput} type="text" value = {this.state.username} onChange = {this.update('username')}/>
                    </label>

                    <label className={classes.formLabel}>
                        <h4>Password</h4>
                        <input className={classes.formInput} type="password" value = {this.state.password} onChange = {this.update('password')}/>
                    </label>

                    {
                        this.props.formType === 'Sign Up'  ? 
                        (
                            <label className={classes.formLabel}>
                                <h4>Confirm Password</h4>
                                    <input className={classes.formInput} type="password" value={this.state.confirmPassword} onChange={this.update('confirmPassword')} />
                            </label>
                        ) : null
                    }

                    <button type="submit" className={classes.formSubmit}> {this.props.formType}</button>
                </form>
            </div>

        )
    }
}




export default withRouter(SessionForm)