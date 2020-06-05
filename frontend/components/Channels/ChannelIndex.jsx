import React from 'react'
import {connect} from 'react-redux'
import {requestChannels} from '../../actions/channel_actions'
import {requestVods, clearVods} from '../../actions/vod_actions'
import classes from './ChannelIndex.module.css'
import {withRouter} from 'react-router-dom'
import ChannelIndexItem from './ChannelIndexItem/ChannelIndexItem'
import Categories from '../Categories/Categories'

class ChannelIndex extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount() {
        if (this.props.match.path == "/"){
            this.props.requestChannels({firstVods: true})
        }else {
            this.props.requestChannels({ allChannels: true })
        }
    }

    componentWillUnmount() {
        this.props.clearVods()
    }


    render() {
        
        return ( 
                <div className = {classes.channelsContainer}>
                    {
                        this.props.vods.map((vod, idx) => {
                            let channel = this.props.channels[vod.channelId];
                            let user;
                            channel ? user = this.props.users[channel.ownerId] : user = null
                            return <ChannelIndexItem key = {idx} vod = {vod}  user = {user} channel = {channel} />
                        }, this)
                    }
                </div>
        )
    }

}




const mSTP = (state) => {
    return {
        channels: state.entities.channels,
        users: state.entities.users,
        vods: Object.values(state.entities.vods)
    }
}


const mDTP = (dispatch) => {
    return {
        requestChannels: (filter) => dispatch(requestChannels(filter)),
        requestVods: () => dispatch(requestVods()),
        clearVods: () => dispatch(clearVods())
    }
}


export default withRouter(connect(mSTP,mDTP)(ChannelIndex))