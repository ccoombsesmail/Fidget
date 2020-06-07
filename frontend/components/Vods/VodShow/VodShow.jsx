import React from 'react'
import { connect } from 'react-redux'
import { requestVod } from '../../../actions/vod_actions'
import classes from './VodShow.module.css'
import { withRouter} from 'react-router-dom'

class VodShow extends React.Component {

    constructor(props) {
        super(props)

    }

    componentDidMount() {
        
        this.props.requestVod(this.props.match.params.vodId)
        
    }

    render() {

        return (
            // <div className = {classes.vodWrapper}>
            <>
                {
                this.props.vod ?
                <video className={classes.videoPlayer} controls> 
                <source src={this.props.vod.videoUrl} /> 
                 </video> : null
                }
            </>
            // </div>
        )
    }

}



const mSTP = (state, ownProps) => {
    return {
        vod: state.entities.vods[ownProps.match.params.vodId]
    }
}



const mDTP = dispatch => {
    return {
        requestVod: (vodId) => dispatch(requestVod(vodId))
    }
}



export default withRouter(connect(mSTP, mDTP)(VodShow))
