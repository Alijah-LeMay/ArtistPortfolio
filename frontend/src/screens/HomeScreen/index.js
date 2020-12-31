import React from 'react'

// My Assets
import trail from '../../assets/trail.jpg'
import skyline from '../../assets/skyline.jpg'
import classes from './HomeScreen.module.css'
const blogPosts = [
  { img: '', description: '' },
  { img: '', description: '2' },
]

const HomeScreen = () => {
  return (
    <div className={classes.homeScreen_container}>
      <div className={classes.slide}>
        <div className={classes.greySquare}>
          <h1 className={classes.title}>John Doe</h1>
          <h1 className={classes.title}>Photography</h1>
        </div>
        <img className={classes.slide_image} src={trail} alt='Trail' />
      </div>
      <div className={classes.blogSlide}>
        <img className={classes.blogSlide_image} src={skyline} alt='skyline' />
        <div className={classes.blogs_container}>
          {blogPosts.map((idx, post) => (
            <div key={idx}>
              <img src={post.img} alt={post.img} />
              <p>{post.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
