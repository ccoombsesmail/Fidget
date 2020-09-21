import React from 'react'
import classes from './App.module.css'

import Modal from './Modal/Modal'
import MainPage from './MainPage/MainPage'
import NavBar from './NavBar/NavBar'

const App = () => {
  return (
    <div className={classes.mainContainer2}>
      <Modal />
      <NavBar />
      <MainPage />
    </div>

  )
}


export default App
