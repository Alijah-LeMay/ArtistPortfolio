import React, { Fragment, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

// Assets
import classes from './BlogPostScreen.module.css'

// Redux

import { getBlogDetails } from '../../store/actions/blogActions'
import { useDispatch, useSelector } from 'react-redux'

// My Components
import Loader from '../../components/Loader'

const BlogPostScreen = (props) => {
  const { match, history } = props
  const dispatch = useDispatch()

  const blogId = match.params.id

  const blogDetails = useSelector((state) => state.blogDetails)
  const { loading: loadingDetails, blog } = blogDetails

  useEffect(() => {
    if (!blog || blog._id !== blogId) {
      dispatch(getBlogDetails(blogId))
    }
  }, [dispatch, blog, blogId])

  const goBackHandler = () => {
    history.push('/blog')
  }
  return (
    <div className={classes.screen_container}>
      {loadingDetails ? (
        <Loader />
      ) : (
        <div className={classes.post_container}>
          <h3>{blog.title}</h3>
          <ReactMarkdown source={blog.content} />
        </div>
      )}
      <button onClick={goBackHandler}>Go Back</button>
    </div>
  )
}

export default BlogPostScreen
