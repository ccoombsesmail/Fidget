import React from 'react'
import { Link } from 'react-router-dom'
import classes from './ChannelIndexItem.module.css'
/* eslint-disable */

const ChannelIndexItem = ({ user, vod, channel }) => {
  return (
    <div>
      {user ? (
      <Link key={vod.id} to={{pathname: `/channels/${vod.channelId}/${channel.channelName}/videos` }}> 
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
      </Link> ) : null
          }
    </div>
  )
}





export default ChannelIndexItem