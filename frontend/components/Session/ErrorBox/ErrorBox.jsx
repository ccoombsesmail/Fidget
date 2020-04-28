import React from 'react'
import classes from './ErrorBox.module.css'


const ErrorBox = ({ errors, navToOtherForm, passwordMatch}) => {

    
    
   let errorBox;

   if (errors['usernameError']) {
        errorBox = <div className={classes.errorBox}>
            <div className={classes.errorsContentWrapper}>
                <b className={classes.errorBoxContent}>
                    {errors['usernameError']}
                </b>
                <p className={classes.errorBoxContent}>
                    Want to <a href='' onClick={navToOtherForm}>create a new account?</a>
                </p>
            </div>
        </div>
    } else if (errors['passwordError']) {
        errorBox = <div className={classes.errorBox}>
            <div className={classes.errorsContentWrapper}>
                <b className={classes.errorBoxContent}>
                    {errors['passwordError']}
                </b>
                <p className={classes.errorBoxContent}>
                    <a href='' onClick={navToOtherForm}>Forgot your password?</a>
                </p>
            </div>
        </div>
    } else if (!passwordMatch) {
        errorBox = <div className={classes.errorBox}>
            <div className={classes.errorsContentWrapper}>
                <b className={classes.errorBoxContent}>
                    Passwords do not match
                </b>
                <p className={classes.errorBoxContent}>
                    {/* <a href='' onClick={navToOtherForm}>Forgot your password?</a> */}
                </p>
            </div>
        </div>

    } else if (Object.values(errors).length === 0) {
        errorBox = null
    } else{
        errorBox = <div className={classes.errorBox}>
            <div className={classes.errorsContentWrapper}>
                <b className={classes.errorBoxContent}>
                    {errors[0]}
                </b>
                <p className={classes.errorBoxContent}>
                    <a href='' onClick={navToOtherForm}>Forgot your password?</a>
                </p>
            </div>
        </div>
    }

    return (
        <>
        {errorBox}
        </>

    )
}


export default ErrorBox