import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

// My Assets
import trail from '../../assets/trail.jpg'
import skyline from '../../assets/skyline.jpg'
import bikes from '../../assets/Gallery/bikes.jpg'
import classes from './HomeScreen.module.css'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { getBlogs } from '../../store/actions/blogActions'
import { getImages } from '../../store/actions/imageActions'

// My Components
import Loader from '../../components/Loader'

const blogPosts = [
  { img: '', description: '' },
  { img: '', description: '2' },
]

const HomeScreen = () => {
  const dispatch = useDispatch()

  const blogList = useSelector((state) => state.blogList)
  const { loading: loadingBlogs, blogs } = blogList
  const imageList = useSelector((state) => state.imageList)
  const { loading: loadingImages, images } = imageList

  useEffect(() => {
    dispatch(getBlogs())
    dispatch(getImages())
  }, [dispatch])

  return (
    <div className={classes.screen_container}>
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
          {loadingBlogs || !blogs ? (
            <Loader />
          ) : (
            blogs.map((post, idx) => (
              <div className={classes.blog_card} key={idx}>
                {post.image ? (
                  <>
                    <div className={classes.image_clipper}>
                      <img
                        className={classes.blog_image}
                        src={post.image}
                        alt={post.image}
                      />
                    </div>
                    <p>{post.description}</p>
                    <Link className={classes.link} to='/blog'>
                      - More
                    </Link>
                  </>
                ) : (
                  <Loader afterColor='white' />
                )}
              </div>
            ))
          )}
        </div>
      </div>
      <div className={classes.imagesSlide_container}>
        {loadingImages || !images ? (
          <Loader />
        ) : (
          images.map((item, idx) => (
            <div key={idx}>
              <img
                className={classes.imagesSlide_image}
                src={item.src[0]}
                alt={item.alt}
              />
            </div>
          ))
        )}
        <div className={classes.imagesSlide_bottom}>
          <Link className={classes.link} to='/gallery'>
            - More
          </Link>
        </div>
      </div>
      <div className={classes.actionSlide_container}>
        <h1>Show The World</h1>
        <h2>What you're made of</h2>

        <button>Get Started</button>
      </div>
    </div>
  )
}

export default HomeScreen
