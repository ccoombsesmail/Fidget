import React from 'react'
import {Route, Switch, Link} from 'react-router-dom'
import classes from './App.module.css'

import SessionControlsContainer from './SessionControls/session_controls_container'
import Modal from './Modal/Modal'
import SideBar from './SideBar/SideBar'
import ChannelIndex from './Channels/ChannelIndex'
import ChannelShow from './Channels/ChannelShow/ChannelShow'

const App = (props) => {

    return(
        <div> 
            <Modal/>
            <nav className = {classes.mainNav}>
                <div className = {classes.leftNav} > 
                    <Link to = '/'> <h1 className={classes.appTitle}> Fidget</h1></Link>
                </div>

                <div className = {classes.rightNav}>
                    <SessionControlsContainer/>
                </div>
            </nav>
            <div className={classes.mainContainer}> 
                <SideBar />

            <Switch> 
                <Route path = "/channels/:channelName" component = {ChannelShow}/>
                <Route path = "/" component = {ChannelIndex}/>
            </Switch>

            </div>

        </div>

    )
}


export default App;