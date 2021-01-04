import React, { useState } from 'react'

// Assets
import classes from './Navbar.module.css'

// My Components
import HamburgerMenu from './HamburgerMenu'
import NavigationItems from './NavigationItems'

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false)

  const drawerToggleHandler = () => {
    setShowDrawer(!showDrawer)
  }
  const drawerCloseHandler = () => {
    setShowDrawer(false)
  }

  return (
    <nav className={classes.nav}>
      <div className={classes.headerLogo}></div>

      <ul className={classes.desktop_container}>
        <NavigationItems />
      </ul>
      <HamburgerMenu
        showBack={showDrawer}
        clicked={drawerToggleHandler}
        close={drawerCloseHandler}
      />
    </nav>
  )
}

export default Navbar
