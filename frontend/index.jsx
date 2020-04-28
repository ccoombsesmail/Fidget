import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store'
import Root from './components/Root'
 


document.addEventListener('DOMContentLoaded', () => {
    let store;

    if (window.currentUser != null) {
        const preloadedState =  {
            entities: {
                users: {
                    [window.currentUser.id] : window.currentUser
                }
            },
            session: {
                currentUserId: window.currentUser.id
            }
        }
        
        store = configureStore( preloadedState)  
        delete window.currentUser

    }else {
        store = configureStore()
    }
   
    
    let rootEl = document.getElementById('root')
    window.getState = store.getState
    ReactDOM.render(<Root store = {store} />, rootEl )

})