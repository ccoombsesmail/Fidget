import {RECEIVE_SESSION_ERRORS, CLEAR_SESSION_ERRORS} from '../actions/session_actions'
import { OPEN_MODAL } from '../actions/modal_actions'



const sessionsErrorsReducer = (state = {}, action) => {
    Object.freeze(state)
    
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return Object.assign({}, action.errors.responseJSON )
        case OPEN_MODAL:
            return {}
        default:
            return state
    }

}



export default sessionsErrorsReducer;