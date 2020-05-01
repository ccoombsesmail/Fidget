import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Route, Redirect, withRouter} from 'react-router-dom'




const Auth = ({component: Component, path, loggedIn}) => {



    return (
        <>
         {
             loggedIn ? (
                <Route
                path = {path}
                render = { props => <Component {...props} />} />
                ) : (
                    <Redirect to ='/'/> 
                )
         }
                        
        </>
    )
}








const mSTP = state => {
    return {
        loggedIn: Boolean(state.session.currentUserId)
    }
}


export default withRouter(connect(mSTP, null)(Auth))