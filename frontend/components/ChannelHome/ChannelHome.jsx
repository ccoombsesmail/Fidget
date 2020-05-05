import React from 'react'
import classes from './ChannelHome.module.css'

class ChannelHome extends React.Component {

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


export default ChannelHome;