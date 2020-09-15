import React from 'react'
import classes from './VideoForm.module.css'
import dashStyles from './Dashboard.module.css'
/* eslint-disable */


class VideoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      videoFile: null,
      videoUrl: null,
      title: '',
      category: '',
    }
    this.categories = ['League of Legends', 'Valorant', 'Just Chatting', 'Teamfighting Tactics', 'Counter-Strike', 'Hearthstone', 'Music']
    this.handleVideo = this.handleVideo.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleVideo(e) {
    const file = e.currentTarget.files[0]
    const fileReader = new FileReader()
    fileReader.onloadend = () => {
      this.setState({ videoFile: file, videoUrl: fileReader.result })
    }
    if (file) {
      fileReader.readAsDataURL(file)
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData()
    formData.append('vod[channel_id]', this.props.channelId)
    formData.append('vod[title]', this.state.title)
    formData.append('vod[category]', this.state.category)
    formData.append('vod[videoUrl]', this.state.videoFile)
    this.props.createVod(formData)
      .then(() => this.props.openModal('success'))
      .then(() => this.setState({ videoFile: null, videoUrl: null, title: '', category: '' }))

  }


  update(type) {
    return (e) => {
      this.setState({ [type]: e.currentTarget.value })
    }
  }

  render() {
    const { videoUrl, videoFile, title, category } = this.state
    let preview = null
    if (videoUrl) {
      preview = (
        <div className={dashStyles.imgPreviewWrapper}>
          <h3> Video Preview </h3>
          <video className={classes.videoPlayer} controls>
            <source src={videoUrl} />
          </video>
        </div>
      )
    }


    const submitBtnClasses = [dashStyles.submitBtn]
    let disableBtn = false
    if (videoFile === null) {
      disableBtn = true
      submitBtnClasses.push(dashStyles.disabledBtn)
    }
    return (
      <div className={classes.videoUploadWrapper}>
        <h2>Upload A VOD To Your Channel</h2>
        <form className={classes.videoForm} onSubmit={this.handleSubmit}>
          <div className={dashStyles.btnDirectionWrapper}>
            <div className={dashStyles.profileBtnWrapper}>
              <label>
                Upload A Video File
                <input className={dashStyles.profileInput} type="file" onChange={this.handleVideo} />
              </label>
              <button disabled={disableBtn} className={submitBtnClasses.join(' ')} onClick={this.handleSubmit} type="submit"> Submit</button>
            </div>
            <h5 style={{ marginBottom: '30px' }}> Must be of type mp4, and cannot exceed 100MB </h5>
            <label className={classes.formLabel}> 
              <h4>Video Title</h4>
              <input className={classes.formInput} type="text" value={title} onChange={this.update('title')} />
            </label>
            <label className={classes.formLabel}>
              <h4>Video Category</h4>
              <select className={classes.categoryInput} value={category} onChange={this.update('category')}>
                <option value="" disabled>Category</option>
                {this.categories.map((cat, idx) => {
                  return <option key={idx} value={cat}>{category}</option>
                })}
              </select>
            </label>
          </div>
          {preview}
        </form>
      </div>
    )
  }
}


export default VideoForm
