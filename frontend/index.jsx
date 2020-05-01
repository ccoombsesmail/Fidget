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
                    [window.currentUser.id] : window.currentUser,
                    [window.demoUser.id]: window.demoUser
                }
            },
            session: {
                currentUserId: window.currentUser.id,
            },
            ui: {
                demoUserId: window.demoUser.id
            }
        }
        
        store = configureStore( preloadedState)  
        delete window.currentUser
        delete window.demoUser


    }else {
        const preloadedState = {
            entities: {
                users: {
                    [window.demoUser.id]: window.demoUser
                }
            },
            ui: {
                demoUserId: window.demoUser.id
            }
        }

        store = configureStore(preloadedState)
        delete window.demoUser
    }


   
    
    let rootEl = document.getElementById('root')
    window.getState = store.getState
    ReactDOM.render(<Root store = {store} />, rootEl )

})