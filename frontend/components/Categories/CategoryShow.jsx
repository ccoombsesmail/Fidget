/* eslint-disable */
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { requestVods, clearVods } from '../../actions/vod_actions'
import { requestCategory } from '../../actions/category_actions'
import classes from './CategoryShow.module.css'

import VodIndexItem from '../Vods/VodsIndex/VodIndexItem'

class CategoryShow extends React.Component {

  componentDidMount() {
    const { categoryName } = this.props.match.params
    this.props.requestVods({
      category: categoryName,
    })
    this.props.requestCategory(categoryName)
  }


  componentWillUnmount() {
    this.props.clearVods()
  }


  render() {
    const { categories, vods, channels } = this.props
    return (
      <div className={classes.categoryWrapper}>
        <div className={classes.banner}>
          {
            categories[0] ? (
              <div className={classes.infoArea}>
                <img alt="" src={categories[0].imgUrl} />
                <div className={classes.description}>
                  <h1>{categories[0].name}</h1>
                  <h5>{categories[0].description} </h5>
                </div>
              </div>
            ) : null
          }
        </div>
        <hr />
        <div className={classes.videoCountWrapper}>
          <h1>Videos </h1>
          <h1>{vods.length}</h1>
        </div>
        <div className={classes.videoWrapper}>
          {
            vods.map((vod) => {
              return <VodIndexItem key={vod.channelId} vod={vod} channel={channels[vod.channelId]} />
            })
          }
        </div>
      </div>
    )
  }
}


const mSTP = (state) => {
  return {
    vods: Object.values(state.entities.vods),
    channels: state.entities.channels,
    categories: Object.values(state.entities.categories),
  }
}


const mDTP = (dispatch) => {
  return {
    requestVods: (filter) => dispatch(requestVods(filter)),
    clearVods: () => dispatch(clearVods()),
    requestCategory: (name) => dispatch(requestCategory(name)),
  }
}


export default withRouter(connect(mSTP, mDTP)(CategoryShow))
