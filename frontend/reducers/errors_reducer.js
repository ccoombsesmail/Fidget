import {combineReducers} from 'redux'
import sessionsErrorsReducer from './session_errors_reducer'



const errorsReducer = combineReducers({
    session: sessionsErrorsReducer
})


export default errorsReducer;