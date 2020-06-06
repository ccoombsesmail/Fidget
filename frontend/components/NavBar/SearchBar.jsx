import React from 'react'
import classes from './SearchBar.module.css'
import {clearChannels, requestSearchedChannels} from '../../actions/channel_actions'
import {connect} from 'react-redux'

class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            searchInput: ''
        }
        this.handleUpdate = this.handleUpdate.bind(this)
    }


    // componentDidUpdate() {
    //     if (this.state.searchInput !== '') {
    //         this.props.clearChannels()
    //         this.props.requestChannels({ searchChannels: true, searchInput: this.state.searchInput })
    //     }
    // }

    handleUpdate(e) {
        this.setState(
            {searchInput: e.currentTarget.value},
            () => {
                if (this.state.searchInput) this.props.requestSearchedChannels({ searchChannels: true, searchInput: this.state.searchInput })
        })
        // this.props.clearChannels()
        // this.props.requestSearchedChannels({ searchChannels: true, searchInput: this.state.searchInput })
    }



    render() {
        return (
    
          <form className = {classes.searchForm}>
            {
              this.state.searchInput ? (
              <ul className = {classes.searchResults}>
                  {
                      
                      this.props.channels.map((channel, idx) => {
                        console.log(this.props.channels)
                         return <li key = {idx}>
                                    <img className = {classes.logo} src = {channel.logoUrl} alt = "" />
                                    <span>{channel.channelName}</span>
                                </li>
                      })
                  }

              </ul> ) : null
            }
              <input onChange = {this.handleUpdate} placeholder = "Search" type="text" value = {this.state.searchInput}/>
              <button>Search</button>
          </form>
          
        )
    }

}


const mSTP = (state) => {
    return {
        channels: state.entities.channels.searched ? Object.values(state.entities.channels.searched) : []
    }
}


const mDTP = (dispatch) => {
    return {
        clearChannels: () => dispatch(clearChannels()),
        requestSearchedChannels: (filter) => dispatch(requestSearchedChannels(filter))
    }
}


export default connect(mSTP, mDTP)(SearchBar)
