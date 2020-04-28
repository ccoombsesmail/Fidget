import {RECEIVE_SESSION_ERRORS} from '../actions/session_actions'



const sessionsErrorsReducer = (state = {}, action) => {
    Object.freeze(state)
    
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return Object.assign({}, action.errors.responseJSON )
        default:
            return state
    }

}



export default sessionsErrorsReducer;