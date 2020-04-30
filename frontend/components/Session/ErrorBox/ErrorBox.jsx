import React from 'react'
import classes from './ErrorBox.module.css'


const ErrorBox = ({ errors, navToOtherForm, passwordMatch}) => {

    
    
    let errorMessage = null;

   if (errors['usernameError']) {
        errorMessage = <>
                <b className={classes.errorBoxContent}>
                    {errors['usernameError']}
                </b>
                <p className={classes.errorBoxContent}>
                    Want to <a href='' onClick={navToOtherForm}>create a new account?</a>
                </p>
            </>
       
    } else if (errors['passwordError']) {
       errorMessage = <>
                <b className={classes.errorBoxContent}>
                    {errors['passwordError']}
                </b>
                <p className={classes.errorBoxContent}>
                    <a href='' onClick={navToOtherForm}>Forgot your password?</a>
                </p>
            </>
    } else if (!passwordMatch) {
       errorMessage = <>
            
                <b className={classes.errorBoxContent}>
                    Passwords do not match
                </b>
                <p className={classes.errorBoxContent}>
                    {/* <a href='' onClick={navToOtherForm}>Forgot your password?</a> */}
                </p>
        </>

    } else if (Object.values(errors).length === 0) {
       errorMessage = null
    } else{
       errorMessage = <>
                <b className={classes.errorBoxContent}>
                    {errors[0]}
                </b>
                <p className={classes.errorBoxContent}>
                    {/* <a href='' onClick={navToOtherForm}>Forgot your password?</a> */}
                </p>
        </>
    }

    return (
        <>
        {
        errorMessage === null ? null : (
            <div className={classes.errorBox}>
                <div className = { classes.errorsContentWrapper} >
                    {errorMessage}
                </div>
            </div>
            )
        }
        </>
    )
}


export default ErrorBox