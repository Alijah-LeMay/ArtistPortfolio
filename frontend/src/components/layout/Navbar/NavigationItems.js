import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'

const NavigationItems = ({ clicked }) => {
  let currentlyActiveStyle = { backgroundColor: '#f1f1f1', color: 'black' }

  let navItems = [
    { to: '/', name: 'Home' },
    { to: '/gallery', name: 'Gallery' },
    { to: '/blog', name: 'Blog' },
    { to: '/contact', name: 'Contact' },
  ]

  return (
    <>
      {navItems.map((item, idx) => (
        <li key={idx} className={classes.regular_nav_li}>
          <NavLink
            className={classes.wideLink}
            exact
            activeStyle={currentlyActiveStyle}
            onClick={clicked}
            to={item.to}
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </>
  )
}

export default NavigationItems
