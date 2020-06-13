/* eslint-disable */
import React from 'react'
import { connect } from 'react-redux'
import './Carousel.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { requestRandomVods } from '../../actions/vod_actions'

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentChecked: 3,
    }

    this.handleChecked = this.handleChecked.bind(this)
    this.scrollLeft = this.scrollLeft.bind(this)
    this.scrollRight = this.scrollRight.bind(this)
    this.clearControls = this.clearControls.bind(this)
  }


  componentDidMount() {

    this.props.requestRandomVods({
      random: true,
    })
  }

  handleChecked(e) {
    this.clearControls()

    this.setState(
      { currentChecked: Number(e.currentTarget.value) }, () => {
        document.getElementById(`video${this.state.currentChecked}`).setAttribute('controls', 'controls')
      },
    )
  }

  scrollLeft() {
    this.clearControls()
    let nextChecked = this.state.currentChecked
    if (nextChecked === 1) {
      nextChecked = 5
    } else {
      nextChecked -= 1
    }
    this.setState({ currentChecked: nextChecked }, () => {
      document.getElementById(`video${this.state.currentChecked}`).setAttribute('controls', 'controls')
    })
  }

  scrollRight() {
    this.clearControls()
    let nextChecked = this.state.currentChecked
    if (nextChecked === 5) {
      nextChecked = 1
    } else {
      nextChecked += 1
    }
    this.setState({ currentChecked: nextChecked }, () => {
      document.getElementById(`video${this.state.currentChecked}`).setAttribute('controls', 'controls')
    })
  }

  clearControls() {
    document.getElementById(`video${this.state.currentChecked}`).removeAttribute('controls')
    document.getElementById(`video${this.state.currentChecked}`).pause()
  }

  render() {
    const vid1 = document.getElementById('video1')
    let videoWidth = '100%'
    if (vid1) {
      const height = window.getComputedStyle(vid1).getPropertyValue('height')
      videoWidth = Number(height.slice(0, height.length - 2)) * 1.78775297619
    }
    const { currentChecked } = this.state
    const { vods, channels } = this.props
    return (
      <div className="slideWrapper">
        <span onClick = {this.scrollLeft} className="left">
          <FontAwesomeIcon icon={faArrowLeft} />
        </span>
        <section id="slider">
          <input onChange={this.handleChecked} value={1} type="radio" name="slider" id="s1" checked={currentChecked === 1} />
          <input onChange={this.handleChecked} value={2} type="radio" name="slider" id="s2" checked={currentChecked === 2} />
          <input onChange={this.handleChecked} value={3} type="radio" name="slider" id="s3" checked={currentChecked === 3} />
          <input onChange={this.handleChecked} value={4} type="radio" name="slider" id="s4" checked={currentChecked === 4} />
          <input onChange={this.handleChecked} value={5} type="radio" name="slider" id="s5" checked={currentChecked === 5} />
          {
            vods.map((vod, idx) => {
              const channel = channels[vod.channelId]
              return (
                <label key={vod.id} htmlFor={`s${idx + 1}`} id={`slide${idx+1}`}>
                  <div style={{ width: videoWidth.toString() + 'px' }} className='crslVidChannel'>
                    <img className="crslUserIcon" src={channel.logoUrl} alt="" />
                    <Link to={`channels/${channel.id}/${channel.channelName}/videos/${vod.id}`}><span>{channel.channelName}</span></Link>
                  </div>
                  <video id={`video${idx + 1}`} className='videoLabel' controls={idx === 2}> 
                    <source src={vod.videoUrl} />
                  </video>
                </label>
              )
            })
          }
        </section>
        <span onClick={this.scrollRight} className="right">
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </div>
    )
  }

}


const mSTP = (state) => {
  let randomVods
  randomVods = state.entities.vods.randomVods ? Object.values(state.entities.vods.randomVods) : randomVods = []
  return {
    vods: randomVods,
    channels: state.entities.channels.randomVodChannels,
  }
}

const mDTP = (dispatch) => {
  return {
    requestRandomVods: (filter) => dispatch(requestRandomVods(filter)),
  }
}


export default connect(mSTP, mDTP)(Carousel);