import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div></div>
      <div>
        <ul>
          <li>
            <Link to='/'>
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to='/training'>
              <p>In Person Training</p>
            </Link>
          </li>
          <li>
            <Link to='/meals'>
              <p>Meal Plans</p>
            </Link>
          </li>
          <li>
            <Link to='/testimonials'>
              <p>Testimonials</p>
            </Link>
          </li>
          <li>
            <Link to='/contact'>
              <p>Contact Us</p>
            </Link>
          </li>
        </ul>
        <h3>&copy; 2020 TrueFit </h3>
      </div>
    </div>
  )
}

export default Footer
