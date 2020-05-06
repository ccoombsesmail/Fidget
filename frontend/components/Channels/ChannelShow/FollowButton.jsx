import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'
import classes from './ChannelShow.module.css'



const FollowButton = ({ currentUserId, followChannel, unfollowChannel, channel, follows }) => {



    
    const handleFollowClick = () => {
        if (currentUserId) {
            followChannel()
        }
    }

    const handleUnfollowClick = () => {
        if (currentUserId) {
            unfollowChannel(channel.id)
        }
    }

    
    return (
        <>
        {
        isChannelOwner(currentUserId, channel) ? <div style = {{backgroundColor: 'transparent', cursor: 'auto'}} className={classes.followWrapper}></div>  :
        currentlyFollowing(currentUserId, channel, follows) ? (
                <div onClick={handleUnfollowClick} className = {classes.followWrapper}> 
                <FontAwesomeIcon className={classes.followIcon} icon={faHeartBroken} />
                <h5>Unfollow</h5>
               
            </div> ) : (

                <div onClick={handleFollowClick} className={classes.followWrapper}>
                <FontAwesomeIcon className={classes.followIcon} icon={faHeart} />
                <h5>Follow</h5>
              
            </div> 

            )
        }
        </>
    )

}


function isChannelOwner(currentUserId, channel) {
    if (currentUserId && channel && currentUserId === channel.id) {
        return true
    }
    return false
}


function currentlyFollowing(currentUserId, channel, follows) {
    if (!currentUserId) {
        return false
    } else {
        if (channel && follows.indexOf(channel.id) !== -1) {
            return true
        } else {
            return false
        }
    }
}


export default FollowButton;