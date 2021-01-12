import React from 'react'
import { Link } from 'react-router-dom'

import classes from './Footer.module.css'

const Footer = () => {
  const iconStyle = { color: 'white', fontSize: '3.2rem', margin: ' 10px 4vw' }
  return (
    <div className={classes.footer_container}>
      <ul>
        <li>
          <Link to='/'>
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link to='/gallery'>
            <p>Gallery</p>
          </Link>
        </li>
        <li>
          <Link to='/blog'>
            <p>Blog</p>
          </Link>
        </li>
      </ul>
      <div className={classes.icon_container}>
        <a href='//www.instagram.com'>
          <i className='fab fa-instagram' style={iconStyle}></i>
        </a>

        <a href='//www.twitter.com'>
          <i className='fab fa-twitter' style={iconStyle}></i>
        </a>
        <a href='//www.facebook.com'>
          <i className='fab fa-facebook-square' style={iconStyle}></i>
        </a>
      </div>
      <ul>
        <li className={classes.largerLink}>
          <Link to='/contact'>
            <p>Contact Us</p>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Footer
