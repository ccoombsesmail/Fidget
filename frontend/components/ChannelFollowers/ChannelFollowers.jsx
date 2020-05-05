import React from 'react'
import classes from './ChannelFollowers.module.css'

class ChannelFollowers extends React.Component {

    constructor(props) {
        super(props)

    }


    render() {

        return (
            <div>
                <video className={classes.videoPlayer} controls>
                    <source src={null} />
                </video>
            </div>
        )
    }

}


export default ChannelFollowers;