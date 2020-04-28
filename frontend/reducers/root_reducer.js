import {combineReducers} from 'redux'
import entitiesReducer from './entities_reducer'
import sessionsReducer from './sessions_reducer'
import uiReducer from './ui_reducer'
import errorsReducer from './errors_reducer'



const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionsReducer,
    ui: uiReducer,
    errors: errorsReducer
})


export default rootReducer