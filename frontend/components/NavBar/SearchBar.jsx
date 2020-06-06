/* eslint-disable */
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import classes from './SearchBar.module.css'
import { clearChannels, requestSearchedChannels } from '../../actions/channel_actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: '',
    }
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidUpdate(prevState) {
    if (!prevState.searchInput && this.state.searchInput) {
      document.getElementById('overlay').addEventListener('click', () => this.setState({searchInput: ''}))
    }
  }

  handleUpdate(e) {
    this.setState(
      { searchInput: e.currentTarget.value },
      () => {
        if (this.state.searchInput) this.props.requestSearchedChannels({ searchChannels: true, searchInput: this.state.searchInput })
      },
    )
  }

  handleClick(e, channel) {
    this.props.history.push(`/channels/${channel.id}/${channel.channelName}/home`)
    this.setState({searchInput: ''})
  }


  render() {
    const { searchInput } = this.state
    return (
      <>
       {
        searchInput ? <div id='overlay' className={classes.overlay} /> : null
       }
      <form className={classes.searchForm}>
        {
          searchInput ? (  
            <ul className={classes.searchResults}>
              {
                this.props.channels.map((channel) => {
                  return (
                    <li key={channel.id} onClick={(e) => this.handleClick(e, channel)}>
                      <img className={classes.logo} src={channel.logoUrl} alt="" />
                      <span>{channel.channelName}</span>
                    </li>
                  )
                })
              }

            </ul>
          ) : null
            }
        <input onChange={this.handleUpdate} placeholder="Search" type="text" value={searchInput} />
        <div className = {classes.searchIconWrapper}>
            <FontAwesomeIcon className={classes.searchIcon} icon={faSearch} />

        </div>
      </form>
      </>
    )
  }
}


const mSTP = (state) => {
  return {
    channels: state.entities.channels.searched ? Object.values(state.entities.channels.searched) : [],
  }
}


const mDTP = (dispatch) => {
  return {
    clearChannels: () => dispatch(clearChannels()),
    requestSearchedChannels: (filter) => dispatch(requestSearchedChannels(filter)),
  }
}


export default withRouter(connect(mSTP, mDTP)(SearchBar))
