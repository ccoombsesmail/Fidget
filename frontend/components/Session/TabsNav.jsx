import React from 'react'
import classes from './TabNavs.module.css'


class TabNavs extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            currentForm: ''
        }

        this.changeTab = this.changeTab.bind(this)
    }


    componentDidMount() {
        this.setState({currentForm: this.props.currentForm})
    }

    changeTab() {
        
        this.props.navToOtherForm()
        let nextForm 
        this.state.currentForm === 'Login' ? nextForm = 'Sign Up' : nextForm = 'Login'
        this.setState({ currentForm: nextForm })
    }

    render() {
        let loginBtnClasses = [classes.navTab]
        let signupBtnClasses = [classes.navTab]

        if (this.state.currentForm === 'Sign Up') {
            signupBtnClasses.push(classes.selected)
        }else {
            loginBtnClasses.push(classes.selected)
        }

        return (
            <ul className={classes.navContainer}>
                <li className={loginBtnClasses.join(' ')} onClick= {this.changeTab} >Log In</li>
                <li className={signupBtnClasses.join(' ')} onClick={this.changeTab} >Sign Up</li>
            </ul>


        )
    }

}


export default TabNavs