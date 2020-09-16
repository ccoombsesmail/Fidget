/* eslint-disable */

import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { clearVods } from '../../actions/vod_actions'
import { requestCategories } from '../../actions/category_actions'
import classes from './Categories.module.css'

class Categories extends React.Component {

  componentDidMount() {
    this.props.requestCategories()
  }

  componentWillUnmount() {
    this.props.clearVods()
  }

  render() {
    return (
      <div className={classes.categoriesWrapper}>
        {
          this.props.categories.map((category, idx) => {
            const key = category.id || idx
            return (
              <Link key={key} to={{ pathname: `/directory/game/${category.name}`, state: { imgUrl: category.imgUrl, description: category.description } }}>
                <div className={classes.categoryItemWrapper}>
                  <div className={classes.categoryItem}>
                    <div className={classes.categoryImgWrap}>
                      <img alt="" className={classes.categoryImg} src={category.imgUrl} />
                    </div>
                    <h5>{category.name}</h5>
                  </div>
                </div>
              </Link>
            )
          })
          }
      </div>
    )
  }
}


const mSTP = (state) => {
  return {
    categories: Object.values(state.entities.categories),
  }
}

const mDTP = (dispatch) => {
  return {
    clearVods: () => dispatch(clearVods()),
    requestCategories: () => dispatch(requestCategories()),
  }
}

export default withRouter(connect(mSTP, mDTP)(Categories))
