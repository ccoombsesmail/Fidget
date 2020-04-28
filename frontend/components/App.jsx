import React from 'react'
import {Route, Switch} from 'react-router-dom'

import SessionControlsContainer from './SessionControls/session_controls_container'
import Modal from './Modal/Modal'

import classes from './App.module.css'
import SideBar from './SideBar/SideBar'


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
            <SideBar/>
            
            {/* <Switch> 
             
            </Switch> */}

        </div>

    )
}


export default App;