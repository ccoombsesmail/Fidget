export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'

import * as SessionAPIUtil from '../util/session_api_util' 


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





export const signup = (user) => dispatch => {

    return SessionAPIUtil.createUser(user)
        .then((user) => dispatch(receiveCurrentUser(user)))
    

}




export const login = (user) => dispatch => {

    return SessionAPIUtil.createSession(user)
        .then((user) => dispatch(receiveCurrentUser(user)))


}


export const logout = () => dispatch => {

    return SessionAPIUtil.deleteSession()
        .then(() => dispatch(logoutCurrentUser()))


}