import React from 'react'
import classes from './VideoForm.module.css'
import dashStyles from './Dashboard.module.css'


class VideoForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            videoFile: null,
            videoUrl: null,
            title: '',
            category: ''
        }
        this.categories = ['League of Legends', 'Valorant', 'Just Chatting', 'Teamfighting Tactics', "Counter-Strike", "Hearthstone", "Music"]
        this.handleVideo = this.handleVideo.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleVideo(e) {
        const file = e.currentTarget.files[0]
        const fileReader = new FileReader()
        fileReader.onloadend = () => {
            this.setState({videoFile: file, videoUrl: fileReader.result})
        }

        if(file) {
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

    }


    update(type) {

        return (e) => {
            this.setState({[type]: e.currentTarget.value})
        }
    }

    render() {
        let preview = null;
        if (this.state.videoUrl) {
            preview = (
            <div className={dashStyles.imgPreviewWrapper}>
                <h3> Video Preview </h3>
                <video className={classes.videoPlayer} controls>
                    <source src={this.state.videoUrl} />
                </video>
            </div>
            )
        }


        let submitBtnClasses = [dashStyles.submitBtn]
        let disableBtn = false
        if (this.state.videoFile === null) {
            disableBtn = true
            submitBtnClasses.push(dashStyles.disabledBtn)
        }
        return (
            <div className={classes.videoUploadWrapper}> 
                <h2 >Upload A VOD To Your Channel</h2>

                <form className={classes.videoForm} onSubmit={this.handleSubmit} >
                    <div className={dashStyles.btnDirectionWrapper}>
                        <div className={dashStyles.profileBtnWrapper}>
                            <label >
                                Upload A Video File
                                <input className={dashStyles.profileInput} type="file" onChange={this.handleVideo} />
                            </label>
                            <button disabled={disableBtn} className={submitBtnClasses.join(' ')} onClick={this.handleSubmit} type="submit"> Submit</button>
                        </div>
                        <h5 style = {{marginBottom: '30px'}}> Must be of type mp4, and cannot exceed 100MB </h5>

                        <label className={classes.formLabel}> 
                            <h4>Video Title</h4>
                            <input className = {classes.formInput} type="text" value={this.state.title} onChange={this.update('title')} />
                        </label>

                        <label className={classes.formLabel}>
                            <h4>Video Category</h4>
                            <select className={classes.categoryInput} value={this.state.category} onChange={this.update('category')}>
                                <option value="" disabled >Category</option>
                                {this.categories.map((category, idx) => {
                                    return <option key={idx} value={category}>{category}</option>
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


