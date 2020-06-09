/* eslint-disable */

import React from 'react'
import { Link } from 'react-router-dom'
import classes from './NavBar.module.css'
import SessionControlsContainer from '../SessionControls/session_controls_container'
import SearchBar from './SearchBar'


class NavBar extends React.Component {

    render() {
        return (

            <nav id="nav" className={classes.mainNav}>
                <div className={classes.leftNav} >
                    <Link to='/'> <img src="https://i.ibb.co/LRxhSsJ/twitchwhite.png" /> </Link>
                    <div className={classes.line}></div>
                    <Link to='/directory'>
                        <div className={classes.browseContainer}>
                            <span className={classes.browse}> Browse </span>
                        </div>
                    </Link>
                    <Link to='/about'>
                      <div className={classes.browseContainer}>
                        <span className={classes.browse}> About </span>
                      </div>
                    </Link>

                </div>
                <SearchBar/>
                {/* <span onClick={() => toggle(false)}> . </span> */}
                <div className={classes.rightNav}>
                    <SessionControlsContainer />
                </div>
            </nav>
        )
    }

}


export default NavBar




// function toggle(dark) {
//     if (!dark) {
//         document.getElementById('nav').style.backgroundColor = 'white'
//         document.getElementById('nav').style.borderBottom = '2px solid #E5E5E5'
//         document.getElementById('sidebar').style.backgroundColor = '#EFEFF1'
//         document.getElementById('indexArea').style.backgroundColor = '#F7F7F8'
//         // document.getElementBy('chatroomWrapper').style.backgroundColor = '#FFFFFF'
//         // document.getElementById('messageSubmit').style.backgroundColor = '#F2F2F2'
//         // document.getElementById('messageList').style.backgroundColor = '#F2F2F2'
//         document.getElementById('channelIndexItem').style.backgroundColor = '#1F1F23'
//         let nodes = document.getElementById('indexArea').getElementsByTagName("div");
//         for (let i = 0; i < nodes.length; i++) {
//             nodes[i].style.background = '#1F1F23';
//             nodes[i].style.color = 'white';

//         }

//         let iconNodes = document.getElementById('sidebar').getElementsByTagName("div");
//         for (let i = 0; i < iconNodes.length; i++) {
//             // iconNodes[i].style.background = '#1F1F23';
//             iconNodes[i].style.color = 'black';

//         }

//     } else {

//     }
// }
