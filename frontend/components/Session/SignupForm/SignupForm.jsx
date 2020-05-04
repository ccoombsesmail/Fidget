import React from 'react'
import classes from '../SessionForm.module.css'
import { withRouter } from 'react-router-dom'

import TabNavs from '../TabNavs/TabsNav'
import ErrorBox from '../ErrorBox/ErrorBox'


class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            passwordMatch: true,
            email: '',
            day: '',
            year: '',
            month: ''
        }
        this.months = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"];
        this.handleSubmit = this.handleSubmit.bind(this)
        this.formatDate = this.formatDate.bind(this)
    }



    componentDidMount() {
        var input = document.getElementById('username');
        input.focus();
    }

    update(type) {
        
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    updateDayYear(type) {

        return (e) => {

            let charInput = e.target.value[e.target.value.length - 1]

            if ((type === "day" && e.target.value.length > 2) || (type === "year" && e.target.value.length > 4)) {
                this.setState({ [type]: e.target.value.slice(0, e.target.value.length - 1) })
            } else if (charInput === undefined || (charInput.charCodeAt(0) > 47 && charInput.charCodeAt(0) < 58)){
                this.setState({ [type]: e.target.value })
            }
            else { 
                this.setState({ [type]: e.target.value.slice(0, e.target.value.length - 1 ) })
            }
            
            }
            
        }
    

    handleSubmit(e) {
        e.preventDefault()
        if (this.state.confirmPassword !== this.state.password && this.props.formType === 'Sign Up') {
            this.setState({ passwordMatch: false })
        } else { 
            let dob = this.formatDate()
            this.props.processForm({
                username: this.state.username,
                password: this.state.password,
                email: this.state.email,
                dob: dob
            })
        }
    }

    formatDate() {
        let monthNum = this.months.indexOf(this.state.month) + 1
        monthNum < 10 ? monthNum = '0' + monthNum.toString() : monthNum = monthNum.toString()
        let day = this.state.day
        if (day.length === 1) {
            day = '0' + day
        }
        return this.state.year + monthNum + day
    }

   


    render() {
        let disableBtn = false
        let submitBtnClasses = [classes.formSubmit]
        Object.values(this.state).forEach(val => {
            if (val === '') {
                disableBtn = true;
                submitBtnClasses.push(classes.disableSubmit)
            }
        })


        return (
            <div className={classes.formWrapper}>
                <a className={classes.formMessage} href="https://fontmeme.com/twitch-logo-font/">
                    <img src="https://fontmeme.com/permalink/200429/10e3b11e54c3e7af300891419c265af8.png" alt="twitch-logo-font" border="0" />
                </a>

                <TabNavs clearErrors={this.props.clearErrors} navToOtherForm={this.props.navToOtherForm} currentForm={this.props.formType} />
                <ErrorBox navToOtherForm={this.props.navToOtherForm} errors={this.props.errors} passwordMatch={this.state.passwordMatch} />


                <form onSubmit={this.handleSubmit} className={classes.form}>

                    <label className={classes.formLabel}>
                        <h4>Username</h4>
                        <input id="username" className={classes.formInput} type="text" value={this.state.username} onChange={this.update('username')} autoComplete="off" />
                        <div className = {classes.infoDiv}>
                            <div className={classes.textDiv}> This is the name people will know you by on Fidget. You can always change it later  </div>
                        </div>
                    </label>

                    <label className={classes.formLabel}>
                        <h4>Password</h4>
                        <input className={classes.formInput} type="password" value={this.state.password} onChange={this.update('password')} />
                    </label>

    
                    <label className={classes.formLabel}>
                        <h4>Confirm Password</h4>
                        <input className={classes.formInput} type="password" value={this.state.confirmPassword} onChange={this.update('confirmPassword')} />
                    </label>

                    <label className={classes.formLabel}>
                        <h4>Date of Birth</h4>
                         <div>
                            <select className={classes.monthInput} value={this.state.month} onChange={this.update('month')}> 
                                <option value = "" disabled >Month</option>
                                {this.months.map((month,idx) => {
                                    return <option key = {idx} value={month}>{month}</option>
                                })}
                            </select> 
                            <input type="text" className={classes.dayInput} value={this.state.day} onChange={this.updateDayYear('day')} placeholder = 'Day' />
                            <input type="text" className={classes.yearInput} value={this.state.year} onChange={this.updateDayYear('year')} placeholder = "Year" /> 
                         </div>
                    </label>

                    <label className={classes.formLabel}>
                        <h4>Email</h4>
                        <input className={classes.formInput} type="email" value={this.state.email} onChange={this.update('email')} />
                    </label>
                         
                    
                    <button disabled={disableBtn} type="submit" className={submitBtnClasses.join(' ')}> {this.props.formType}</button>
                </form>
            </div>

        )
    }
}




export default withRouter(Signup)