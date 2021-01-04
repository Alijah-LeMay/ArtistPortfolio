import React from 'react'

import classes from './Navbar.module.css'

// My Components
import NavigationItems from './NavigationItems'
import Backdrop from '../../Backdrop'

const HamburgerMenu = (props) => {
  return (
    <>
      <div className={classes.hamburger_container} onClick={props.clicked}>
        <i
          className='fas fa-bars'
          style={{ color: 'black', fontSize: '1.3rem' }}
        ></i>
      </div>
      <Backdrop show={props.showBack} clicked={props.close} />

      <div
        className={
          props.showBack ? classes.sideDrawer_open : classes.sideDrawer_close
        }
      >
        <ul className={classes.drawerlist_container}>
          <NavigationItems clicked={props.clicked} mobile />
        </ul>
      </div>
    </>
  )
}

export default HamburgerMenu
