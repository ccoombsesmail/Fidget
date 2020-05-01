import React from 'react'
import {connect} from 'react-redux'
import {requestChannels} from '../../actions/channel_actions'
import classes from './ChannelIndex.module.css'

import ChannelIndexItem from './ChannelIndexItem/ChannelIndexItem'

class ChannelIndex extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.requestChannels()
    }


    render() {
        
        return (
            <div id="indexArea" className = {classes.indexWrapper}> 
            {this.props.channels.length === 0 ? null : 
            <img src = {this.props.channels[0].logoUrl}/> 
            }  
                {
                    this.props.channels.map((channel, idx) => {
                        return <ChannelIndexItem key = {idx} channel = {channel}  user = {this.props.users[channel.ownerId]} />
                    })
                }

            </div>


        )
    }

}







const mSTP = (state) => {
    return {
        channels: Object.values(state.entities.channels),
        users: state.entities.users
    }
}


const mDTP = (dispatch) => {
    return {
        requestChannels: () => dispatch(requestChannels())
    }
}


export default connect(mSTP,mDTP)(ChannelIndex)