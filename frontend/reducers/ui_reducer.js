import {combineReducers} from 'redux'
import modalReducer from './modal_reducer'
import demoReducer from './demo_reducer'


const uiReducer = combineReducers({
    modal: modalReducer,
    demoUserId: demoReducer
})



export default uiReducer