import * as CategoryAPIUtil from '../util/categories_api_util'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY'


const receiveCategory = (category) => {
  return {
    type: RECEIVE_CATEGORY,
    category,
  }
}


const receiveCategories = (categories) => {
  return {
    type: RECEIVE_CATEGORIES,
    categories,
  }
}


export const requestCategories = () => (dispatch) => {
  return CategoryAPIUtil.fetchCategories()
    .then((categories) => dispatch(receiveCategories(categories)))
}

export const requestCategory = (name) => (dispatch) => {
  return CategoryAPIUtil.fetchCategory(name)
    .then((category) => dispatch(receiveCategory(category)))
}
