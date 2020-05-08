import React from 'react'
import classes from './MainNav.module.css'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Categories from '../Categories/Categories'
import ChannelIndex from '../Channels/ChannelIndex'
class MainNav extends React.Component {

    constructor(props) {
        super(props)      
        this.state = {
            nextTab: 'channels'
        }

        this.changeTab = this.changeTab.bind(this)
    }


    // componentDidUpdate(prevProps, prevState) {

    //     if (this.state.nextTab === "videos" && prevState.nextTab !== "videos") {
    //         this.props.history.push(`/channels/${this.props.channelId}/${this.props.channelName}/videos`)
    //     }
    // }

    changeTab(tab) {
        // this.props.history.push(`/channels/${this.props.channelId}/${this.props.channelName}/${tab}`)
        this.setState({ nextTab: tab })
    }



    render() {

        let homeClasses = []
        let videoClasses = []

        switch (this.state.nextTab) {
            case "channels":
                homeClasses.push(classes.tabSelected)
                break;
            case "categories":
                videoClasses.push(classes.tabSelected)
                break;
            default:
                break;
        }

        return (
            <div className = {classes.directoryWrapper}> 
                <h1>Browse</h1>
                <ul className={classes.tabsWrapper}>
                    <li onClick={() => this.changeTab("channels")} className={homeClasses.join(' ')}>
                        <p className={classes.tabTitle}> Channels </p>
                    </li>

                    <li onClick={() => this.changeTab("categories")} className={videoClasses.join(' ')}>
                        <p className={classes.tabTitle}> Categories </p>
                    </li>

                </ul>

                {
                
                    this.state.nextTab === 'channels' ? (
                        <ChannelIndex/>
                    ) : (
                        <Categories/>
                    )

                }
            </div>

        )
    }
}



export default withRouter(MainNav);