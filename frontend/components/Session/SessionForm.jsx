import React from 'react'
import classes from './SessionForm.module.css'
import TabNavs from './TabsNav'
import { withRouter } from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
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
        this.props.processForm(this.state)
        // this.props.closeModal()

    }

    render() {
        
        let errors = this.props.errors
        let errorBox;
        if (!errors) {
            errorBox = null
        }else if (errors['usernameError']) {
            errorBox = <div>
                {errors['usernameError']}
            </div>
        }else {
            errorBox = <div>
                {errors['passwordError']}            
            </div>
        }


        return (
            <div className = {classes.formWrapper}>

                {errorBox}
                <h2 className= {classes.formMessage}>{this.props.formType} To Fidget</h2>
                <TabNavs navToOtherForm= {this.props.navToOtherForm} currentForm = {this.props.formType} />



                <form onSubmit={this.handleSubmit} className={classes.form}>

                    <label className={classes.formLabel}>
                        <h4>Username</h4>
                        <input className = {classes.formInput} type="text" value = {this.state.username} onChange = {this.update('username')}/>
                    </label>

                    <label className={classes.formLabel}>
                        <h4>Password</h4>
                        <input className={classes.formInput} type="text" value = {this.state.password} onChange = {this.update('password')}/>
                    </label>

                    <button type="submit" className={classes.formSubmit}> {this.props.formType}</button>
                </form>
            </div>

        )
    }
}




export default withRouter(SessionForm)