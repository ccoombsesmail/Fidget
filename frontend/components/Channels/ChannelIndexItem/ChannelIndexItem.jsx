import React from 'react'
import classes from './ChannelIndexItem.module.css'
import {Link} from 'react-router-dom'

const ChannelIndexItem = (props) => {


    return (
        <Link to={{pathname: `/channels/${props.user.username}`, state: {id: 15}}}> <div className={classes.channelItem}> Channnnel {props.channel.id}</div></Link>
    )
}





export default ChannelIndexItem