import React from 'react'
import {connect} from 'react-redux'
import classes from './ChannelVideosIndex.module.css'
import {withRouter} from 'react-router-dom'
import {requestVods} from '../../../actions/vod_actions'
import VodIndexItem from './VodIndexItem'

class ChannelVideosIndex extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        
        this.props.requestVods({
            channel_id: this.props.match.params.channelId
        })
        


    }

    render() {
        
        return(
            <div className = {classes.indexWrapper}> 
                <div className = {classes.videoCountWrapper}> 
                    <h1>Videos </h1>
                    <h1>{this.props.vods.length} </h1>
                </div>
                <hr/>
                <div className = {classes.vodsWrapper}>
                    {
                        this.props.vods.map((vod,idx) => {
                            return <VodIndexItem key = {idx} vod = {vod}/> 
                        })
                    }
                </div>
            </div>
        )
    }



}


const mSTP = state => {
    return {
        vods: Object.values(state.entities.vods)
    }
}

const mDTP = dispatch => {
    return {
        requestVods: (filter) => dispatch(requestVods(filter))
    }
}


export default withRouter(connect(mSTP, mDTP)(ChannelVideosIndex));
