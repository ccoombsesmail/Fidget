import React from 'react'
import classes from './SideBar.module.css'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { requestChannels } from '../../actions/channel_actions'
import { getFollowedChannels } from '../../util/selectors'
import SideBarItem from './SideBarItem'


class SideBar extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.requestChannels()
    }



    render() {
        
        return (

            <div id="sidebar" className = {classes.sideBar}>
                {
                (this.props.users && this.props.followedChannels) ? (
                    <>
                        <h3>Followed Channels</h3>
                        {
                        this.props.followedChannels.map((channel, idx) => {
                            return <SideBarItem channel={channel} key={idx} users={this.props.users} />
                        })
                        }
                    </>
                    ) : null  
                    
                }

                <h3>Recommended Channels</h3>

                {
                    this.props.channels.length > 1 ? (
                        this.props.channels.map((channel, idx) => {
                           return <SideBarItem channel = {channel} key = {idx} users = {this.props.users}/> 
                        })
                    ) : null           

                }
   

            </div>

        )
    }

}




const mSTP = state => {
    let currentUser = state.entities.users[state.session.currentUserId]
    let followedChannels = [];
    if (currentUser) {
        followedChannels = getFollowedChannels(state.entities.channels, currentUser)
    }
    return {
        channels: Object.values(state.entities.channels).slice(0,7),
        users: state.entities.users,
        followedChannels: followedChannels.slice(0,7)
    }
}


const mDTP = dispatch => {
    return {
        requestChannels: () => dispatch(requestChannels())
    }
}



export default withRouter(connect(mSTP,mDTP)(SideBar))