import React from 'react'
import {connect} from 'react-redux'
import classes from './ChannelVideosIndex.module.css'
import Categories from '../../Categories/Categories'



class ChannelVideosIndex extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {

        this.props.requestVods()
        debugger
        

    }

    render() {

        return(
            <div >
                <Categories>
                    
                </Categories>

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
