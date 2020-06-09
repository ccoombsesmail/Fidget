import React from 'react'
import classes from './ChannelNavs.module.css'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

class ChannelNavs extends React.Component {

    constructor(props) {
        super(props)
        let nextTab = 'home'
        if (props.location.state) {
            nextTab = props.location.state.tab
        }
        
        this.state = {
            nextTab:  nextTab
        }
        
        this.changeTab = this.changeTab.bind(this)
    }


    // componentDidUpdate(prevProps, prevState) {
        
    //     if (this.state.nextTab === "videos" && prevState.nextTab !== "videos") {
    //         this.props.history.push(`/channels/${this.props.channelId}/${this.props.channelName}/videos`)
    //     }
    // }

    changeTab(tab) {
        if (tab === 'home') {
            if (!this.props.currentUser || this.props.channelName !== this.props.currentUser.username) {
                this.props.history.push(`/channels/${this.props.channelId}/${this.props.channelName}/${tab}`)
            } else {
                this.props.history.push(`/channels/${this.props.channelId}/${this.props.channelName}/stream`)
            }
        }
        this.setState({nextTab: tab})
    }

   

    render() {

        let homeClasses = []
        let videoClasses = []
        let followersClasses = []

        switch (this.state.nextTab) {
            case "home":
                homeClasses.push(classes.tabSelected)
                break;
            case "videos":
                videoClasses.push(classes.tabSelected)
                break;
            case 'followers':
                followersClasses.push(classes.tabSelected)
                break;
            default:
                break;
        }

        return(
            <ul className = {classes.tabsWrapper}>
                <li onClick = {() => this.changeTab("home")} className={homeClasses.join(' ')}>
                    <p className = {classes.tabTitle}> Home </p>
                </li>

                <li onClick={() => this.changeTab("videos")} className={videoClasses.join(' ')}> 
                    <p className={classes.tabTitle}> Videos </p>
                </li>
                
                <li onClick={() => this.changeTab("followers")} className={followersClasses.join(' ')}>
                    <p className={classes.tabTitle}> Followers </p>              
                </li>
            </ul>

        )
    }
}



export default withRouter(ChannelNavs);