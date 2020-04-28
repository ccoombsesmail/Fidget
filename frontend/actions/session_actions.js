export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS'

import * as SessionAPIUtil from '../util/session_api_util' 
import {closeModal} from './modal_actions'

const receiveCurrentUser = (user) => {

    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}


const receiveSessionErrors = (errors) => {

    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}


export const clearSessionErrors = () => {
    return {
        type: CLEAR_SESSION_ERRORS
    }
}



export const signup = (user) => dispatch => {

    return SessionAPIUtil.createUser(user)
        .then((user) => dispatch(receiveCurrentUser(user)))
        .then(() => dispatch(closeModal()))
        .fail(err => dispatch(receiveSessionErrors(err)))

    

}




export const login = (user) => dispatch => {

    return SessionAPIUtil.createSession(user)
        .then((user) => dispatch(receiveCurrentUser(user)))
        .then(() => dispatch(closeModal()))
        .fail(err => dispatch(receiveSessionErrors(err)))


}


export const logout = () => dispatch => {

    return SessionAPIUtil.deleteSession()
        .then(() => dispatch(logoutCurrentUser()))
        
        


}


export const clearErrors = () => dispatch => {

    return () => {
        dispatch(clearSessionErrors())
    }

}