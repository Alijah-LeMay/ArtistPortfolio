import React from 'react'

// My Assets
import trail from '../../assets/trail.jpg'
import classes from './HomeScreen.module.css'
const blogPosts = [
  { img: '', description: '' },
  { img: '', description: '2' },
]

const HomeScreen = () => {
  return (
    <div className={classes.homeScreen_container}>
      <div className={classes.slide}>
        <img src={trail} alt='Trail' />
        <div className={classes.greySquare}></div>
      </div>
      <div className={classes.blogSlide}>
        {blogPosts.map((idx, post) => (
          <div key={idx}>
            <img src={post.img} alt={post.img} />
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeScreen
