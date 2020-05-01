import React from 'react'
import classes from './Dashboard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser } from '@fortawesome/free-solid-svg-icons'

class Dashboard extends React.Component {

    constructor(props) {
        super(props)
     

    }



    render() {

        return (
            <div className = {classes.dashboardWrapper}>
                <h1>Dashboard</h1>
                <hr />

                <div className = {classes.profileWrapper }>
                <h2 >Profile Picture</h2>
                <form className = {classes.profileForm} >
                        <FontAwesomeIcon className={classes.userIcon} icon={faUser} />
                    <div className = {classes.btnDirectionWrapper}> 
                        <div className={classes.profileBtnWrapper}> 
                            <label > 
                                    Add A Profile Picture
                            <input className={classes.profileInput}  type="file" />
                            </label>
                        </div>
                    <h5> Must be JPEG, PNG, or GIF and cannot exceed 10MB </h5>
                    </div>
                </form>

                </div>

            </div>

        )
    }


}


export default Dashboard