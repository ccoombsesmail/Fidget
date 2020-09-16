import React from 'react'
import classes from './AboutPage.module.css'
/* eslint-disable */


const AboutPage = () => {

  return (
    <div className={classes.aboutWrapper}>
      <div className={classes.mostOuter}>
        <div className={classes.outer}>
          <img className={classes.picture} src="https://i.ibb.co/BNWWQ2f/aaheadshot.png" alt="" />
          <h1> Charles Coombs-Esmail</h1>
          <h2>Website Creator</h2>
          <ul className={classes.linkWrapper}>
            <li>
              <a href="https://www.linkedin.com/in/charles-coombs-esmail-1b5a20113/"> 
                <img className={classes.icon} src="https://i.ibb.co/28km227/linkedin-icon.png" alt="" />
              </a>
            </li>
            <li>
              <a href="https://github.com/ccoombsesmail">
                <img className={classes.icon} src="https://i.ibb.co/r7dzbWg/github-icon.png" alt="" />
              </a>
            </li>
            <li>
              <a href="https://angel.co/u/charlie-coombs">
                <img className={classes.icon} src="https://i.ibb.co/k1qWrsg/angelist.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

  )
}


export default AboutPage
