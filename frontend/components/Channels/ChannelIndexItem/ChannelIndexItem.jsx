import React from 'react'
import classes from './ChannelIndexItem.module.css'
import {Link} from 'react-router-dom'

const ChannelIndexItem = ({user, vod, channel}) => {


    return (
        <div>
        {user ? 
        <Link to={{pathname: `/channels/${vod.channelId}/${user.username}`, state: {user: user}}}> 
        <div id = "channelIndexItem" className={classes.channelItem}> 
            {  
            vod.videoUrl ? (
                <video className={classes.videoPlayer}>
                        <source src={vod.videoUrl} /> 
                </video>) : (<img className={classes.icon} src={channel.logoUrl} />  )
            }
        </div>
        <div className = {classes.channelDetailsWrapper}>
            <img className={classes.icon} src={channel.logoUrl} />
            <section className = {classes.details}> 
                <h4>{vod.title}</h4>
                <h5>{user.username}</h5> 
                <h5>{vod.category}</h5> 
            </section>
        </div>
        </Link> : null
            }
        </div>
    )
}





export default ChannelIndexItem