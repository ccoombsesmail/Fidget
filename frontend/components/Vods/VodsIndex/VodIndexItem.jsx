import React from 'react'
import {withRouter} from 'react-router-dom'
import classes from './ChannelVideosIndex.module.css'

const VodIndexItem = ({vod, match, history}) => {

    const navToVodShow = () => {
        let channelName = match.params.channelName
        history.push(`/channels/${channelName}/videos/${vod.id}`)    
    }

    return (

        <div className = {classes.vodItem}>
            {/* <div onClick = {navToVodShow} className = {classes.vodThumb}> */}
            <video onClick={navToVodShow} className={classes.videoPlayer}>
                    <source src={vod.videoUrl} />
                </video>
            {/* </div> */}
            <h5>{vod.title}</h5>
            <h6>{vod.category}</h6>
        </div>


    )

}




export default withRouter(VodIndexItem)