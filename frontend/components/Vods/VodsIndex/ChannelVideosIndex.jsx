import React from 'react'
import {connect} from 'react-redux'
import classes from './ChannelVideosIndex.module.css'
import Categories from '../../Categories/Categories'
import {requestVods} from '../../../actions/vod_actions'
import VodIndexItem from './VodIndexItem'

class ChannelVideosIndex extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {

        this.props.requestVods()
        


    }

    render() {
        
        return(
            <div className = {classes.vodsWrapper}>
                {
                    this.props.vods.map((vod,idx) => {
                        return <VodIndexItem key = {idx} vod = {vod}/> 
                    })
                }
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
        requestVods: () => dispatch(requestVods())
    }
}


export default connect(mSTP, mDTP)(ChannelVideosIndex);
