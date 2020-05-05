import React from 'react'
import {connect} from 'react-redux'
import {requestVods, clearVods} from '../../actions/vod_actions'
import {withRouter} from 'react-router-dom'
import classes from './CategoryShow.module.css'

import VodIndexItem from '../Vods/VodsIndex/VodIndexItem'

class CategoryShow extends React.Component {
    constructor(props){
        super(props)

        this.imgUrl = props.location.state['imgUrl']
        this.description = props.location.state['description']
    }


    componentDidMount() {
        this.props.requestVods({
            category: this.props.match.params.categoryName
        })
    }


    componentWillUnmount() {
        this.props.clearVods()
    }


    render() {

        return (

            <div className = {classes.categoryWrapper}>
                <div className = {classes.banner}>
                    <div className = {classes.infoArea}>
                        <img src={this.imgUrl} />
                        <div className = {classes.description}>
                            <h1>{this.props.match.params.categoryName}</h1>
                            <h5>{this.description} </h5>
                        </div>
                    </div>
                </div>

                <div className = {classes.videoWrapper}>
                        {
                            this.props.vods.map((vod, idx) => {

                                return <VodIndexItem key={idx} vod={vod} /> 
                                //    return <video className={classes.videoPlayer}>
                                //         <source src={vod.videoUrl} />
                                //     </video>

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
        requestVods: (filter) => dispatch(requestVods(filter)),
        clearVods: () => dispatch(clearVods())

    }
}


export default withRouter(connect(mSTP, mDTP)(CategoryShow))