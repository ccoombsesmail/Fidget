import React from 'react'
import classes from './ChannelIndexItem.module.css'
import {Link} from 'react-router-dom'

const ChannelIndexItem = (props) => {


    return (
        <Link to={{pathname: `/channels/${props.user.username}`, state: {id: 15}}}> <div id = "channelIndexItem" className={classes.channelItem}> {props.user.username}</div></Link>
    )
}





export default ChannelIndexItem