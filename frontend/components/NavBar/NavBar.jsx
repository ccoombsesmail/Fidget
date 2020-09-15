import React from 'react'
import { Link } from 'react-router-dom'
import classes from './NavBar.module.css'
import SessionControlsContainer from '../SessionControls/session_controls_container'
import SearchBar from './SearchBar'

/* eslint-disable */

const NavBar = () => {

  return (
    <nav id="nav" className={classes.mainNav}>
      <div className={classes.leftNav} >
        <Link to="/">
          <img alt="" src="https://i.ibb.co/LRxhSsJ/twitchwhite.png" />
        </Link>
        <div className={classes.line} />
        <Link to="/directory">
          <div className={classes.browseContainer}>
            <span className={classes.browse}> Browse </span>
          </div>
        </Link>
        <Link to="/about">
          <div className={classes.browseContainer}>
            <span className={classes.browse}> About </span>
          </div>
        </Link>
      </div>
      <SearchBar />
      <div className={classes.rightNav}>
        <SessionControlsContainer />
      </div>
    </nav>
  )
}


export default NavBar
