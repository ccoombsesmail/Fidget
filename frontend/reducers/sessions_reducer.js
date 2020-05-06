import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_NEW_USER} from '../actions/session_actions'

const _nullSession = {
    currentUserId: null
}


const sessionsReducer = (state = _nullSession, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, {currentUserId: action.user.id});
        case RECEIVE_NEW_USER:
            return Object.assign({}, { currentUserId: Object.keys(action.payload.user)[0] });
        case LOGOUT_CURRENT_USER:
            return _nullSession
        default:
            return state
    }


}


export default sessionsReducer;