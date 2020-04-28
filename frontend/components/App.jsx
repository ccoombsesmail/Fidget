import React from 'react'
import {Route, Switch} from 'react-router-dom'

import SignupContainerComponent from './Session/signup_container_component'
import LoginContainerComponent from './Session/login_container_component'
import SessionControlsContainer from './SessionControls/session_controls_container'
import Modal from './Modal/Modal'

import classes from './App.module.css'



const App = (props) => {

    return(
        <div> 
            <Modal/>
            <nav className = {classes.mainNav}>
                <div className = {classes.leftNav} > 
                    <h1 className = {classes.appTitle}> Fidget</h1>
                </div>

                <div className = {classes.rightNav}>
                    <SessionControlsContainer/>
                </div>
            </nav>
            
            {/* <Switch> 
                <Route path="/login" component={LoginContainerComponent} />
                <Route path ="/signup" component={SignupContainerComponent} />
            </Switch> */}

        </div>

    )
}


export default App;