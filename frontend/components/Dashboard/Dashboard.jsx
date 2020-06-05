import React from 'react'
import classes from './Dashboard.module.css'
import { connect } from 'react-redux'
import {updateChannel, requestChannel} from '../../actions/channel_actions'
import {openModal} from '../../actions/modal_actions'
import {createVod} from '../../actions/vod_actions'
import VideoForm from './VideoForm'



class Dashboard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            logoFile: null,
            logoUrl: null
        }
     
        this.handlePhoto = this.handlePhoto.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    componentDidMount() {
        this.props.requestChannel(this.props.currentUser.channelId)
    }


    handlePhoto(e) {
        
        const file = e.currentTarget.files[0]
        const fileReader = new FileReader()
        
        fileReader.onloadend = () => {
            this.setState({ logoFile: file, logoUrl: fileReader.result })
        }
        if (file) {
            fileReader.readAsDataURL(file)
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('channel[owner_id]', this.props.currentUser.id) 
        formData.append('channel[logoUrl]', this.state.logoFile) 
        this.props.updateChannel(this.props.currentUser.id, formData)
        .then(() => this.setState({logoUrl: null, logoFile: null}))
        .then(() => this.props.openModal("success"))
    }

    render() {
        
        let preview = null;
        if (this.state.logoUrl) {
            preview = ( <div className = {classes.imgPreviewWrapper}> 
            <h3> Logo Preview </h3>
            <img src={this.state.logoUrl} alt=""/>
            </div> )
        }


        let submitBtnClasses = [classes.submitBtn]
        let disableBtn = false
        if (this.state.logoFile === null ) {
            disableBtn = true
            submitBtnClasses.push(classes.disabledBtn)
        }
        
        return (
            <div className = {classes.dashboardWrapper}>
                <h1>Dashboard</h1>
                <hr />

                <div className = {classes.profileWrapper }>
                <h2 >Profile Picture</h2>
                <form className = {classes.profileForm} onSubmit = {this.handleSubmit}>
                    
                    <img className={classes.userIcon} src={this.props.currentChannel ? this.props.currentChannel.logoUrl : null} /> 
                    <div className = {classes.btnDirectionWrapper}> 
                        <div className={classes.profileBtnWrapper}> 

                            <label > Add A Profile Picture
                                <input className={classes.profileInput}  type="file"  onChange = {this.handlePhoto} />
                            </label>
                            <button disabled={disableBtn} className={submitBtnClasses.join(' ')} onClick={this.handleSubmit} type="submit"> Submit</button>

                        </div>
                        <h5> Must be JPEG, PNG, or GIF and cannot exceed 10MB </h5>

    

                    </div>
                    {preview}

                </form>

                

                </div>

                <VideoForm openModal = {this.props.openModal} createVod = {this.props.createVod} channelId = {this.props.currentChannel ? this.props.currentChannel.id : 0}/>

            </div>

        )
    }


}


const mSTP = state => {
    const currentUser = state.entities.users[state.session.currentUserId]
    return {
        currentUser: currentUser,
        currentChannel: state.entities.channels[currentUser.channelId]
        
    }
}


const mDTP = dispatch => {
    return {
        updateChannel: (ownerId, formData) => dispatch(updateChannel(ownerId, formData)),
        requestChannel: (channelId) => dispatch(requestChannel(channelId)),
        createVod: (vod) => dispatch(createVod(vod)),
        openModal: (comp) => dispatch(openModal(comp))
    }
}

export default connect(mSTP, mDTP)(Dashboard)