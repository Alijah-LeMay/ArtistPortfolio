import React from 'react'

// Assets
import classes from './NotFoundScreen.module.css'

const NotFoundScreen = () => {
  return (
    <div className={classes.screen_container}>
      <i
        className='fas fa-surprise'
        style={{ fontSize: '10rem', padding: '0 0 50px 0' }}
      ></i>
      <h1 style={{ padding: '0 0 20px 0' }}>Oh no! This page doesn't exist.</h1>
    </div>
  )
}

export default NotFoundScreen
