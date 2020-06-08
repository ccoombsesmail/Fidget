import {RECEIVE_CATEGORIES, RECEIVE_CATEGORY} from '../actions/category_actions'


const categoriesReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_CATEGORIES:
            return Object.assign({}, action.categories)
            break
        case RECEIVE_CATEGORY:
            return Object.assign({}, action.category)
        default:
            return state
    }
}


export default categoriesReducer