import React from 'react'
import classes from './ChannelIndexItem.module.css'
import {Link} from 'react-router-dom'

const ChannelIndexItem = (props) => {


    return (
        <div>
        {props.user ? 
       
        <Link to={{pathname: `/channels/${props.channel.id}/${props.user.username}`, state: {channel: props.channel}}}> 
        <div id = "channelIndexItem" className={classes.channelItem}> 
            <img className={classes.icon} src={props.channel.logoUrl} />
            {props.user.username}
        </div>
        </Link> : null
            }
        </div>
    )
}





export default ChannelIndexItem