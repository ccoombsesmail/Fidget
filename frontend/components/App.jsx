import React from 'react'
import {Route, Switch, Link} from 'react-router-dom'
import classes from './App.module.css'

import SessionControlsContainer from './SessionControls/session_controls_container'
import Modal from './Modal/Modal'
import MainPage from './MainPage/MainPage'
import NavBar from './NavBar/NavBar'

const App = (props) => {

    return(
        <div className={classes.mainContainer2}> 
            <Modal/>
            <NavBar/>
            <MainPage/>
        </div>

    )
}


export default App;


