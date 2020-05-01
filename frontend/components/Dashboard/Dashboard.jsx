import React from 'react'
import classes from './Dashboard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import {updateChannel} from '../../actions/channel_actions'
class Dashboard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            photoFile: null
        }
     
        this.handlePhoto = this.handlePhoto.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }


    handlePhoto(e) {

        this.setState({
            photoFile: e.currentTarget.files[0]
        })

    }

    handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('channel[owner_id]', this.props.currentUserId) 
        formData.append('channel[logoUrl]', this.state.photoFile) 
        debugger
        this.props.updateChannel(this.props.currentUserId, formData)
    }

    render() {
        
        return (
            <div className = {classes.dashboardWrapper}>
                <h1>Dashboard</h1>
                <hr />

                <div className = {classes.profileWrapper }>
                <h2 >Profile Picture</h2>
                <form className = {classes.profileForm} onSubmit = {this.handleSubmit} >
                        <FontAwesomeIcon className={classes.userIcon} icon={faUser} />
                    <div className = {classes.btnDirectionWrapper}> 
                        <div className={classes.profileBtnWrapper}> 
                            <label > 
                                    Add A Profile Picture
                            <input className={classes.profileInput}  type="file"  onChange = {this.handlePhoto} />
                            </label>
                        </div>
                    <h5> Must be JPEG, PNG, or GIF and cannot exceed 10MB </h5>
                    </div>
                    <button onClick ={this.handleSubmit} type = "submit"> Submit</button>
                </form>

                </div>

            </div>

        )
    }


}


const mSTP = state => {
    return {
        currentUserId: state.session.currentUserId
    }
}


const mDTP = dispatch => {
    return {
        updateChannel: (ownerId, formData) => dispatch(updateChannel(ownerId, formData))
    }
}

export default connect(mSTP, mDTP)(Dashboard)