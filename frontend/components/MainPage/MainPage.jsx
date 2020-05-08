import React from 'react'
import { Route, Switch} from 'react-router-dom'
import classes from './MainPage.module.css'

import AuthRoute from '../../util/route_util'
import ChannelShow from '../Channels/ChannelShow/ChannelShow'
import CategoryShow from '../Categories/CategoryShow'
import Dashboard from '../Dashboard/Dashboard'
import SideBar from  "../SideBar/SideBar"
import HomePageIndex from '../HomePageIndex/HomePageIndex'
import MainNav from '../MainNav/MainNav'

const MainPage = () => {


    return (
            <div className={classes.mainContainer}>
                <SideBar/> 
                <Switch>
                    <Route path="/channels/:channelId/:channelName" component={ChannelShow} />
                    <Route path="/directory/game/:categoryName" component={CategoryShow} />
                    <Route path="/directory" component={MainNav} />
                    <AuthRoute path="/:channelName/dashboard" component={Dashboard} />
                    <Route path="/" component={HomePageIndex} />
                </Switch>

            </div>

    )
}


export default MainPage;