import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
// Assets
import classes from '../AdminScreen.module.css'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import {
  createBlog,
  deleteBlog,
  getBlogs,
} from '../../../store/actions/blogActions'
import { CREATE_BLOG_RESET } from '../../../store/constants/blogConstants'
// My Components
import Loader from '../../../components/Loader'

const BlogSection = (props) => {
  const { history } = props
  const dispatch = useDispatch()

  const blogCreate = useSelector((state) => state.blogCreate)
  const { success: successCreateBlog, blog: createdBlog } = blogCreate

  const blogList = useSelector((state) => state.blogList)
  const { loading: loadingBlogs, success: successLoad, blogs } = blogList

  const blogDelete = useSelector((state) => state.blogDelete)
  const { loading: loadingBlogDelete, success: successBlogDelete } = blogDelete

  const createBlogHandler = (e) => {
    e.preventDefault()
    dispatch(createBlog())
  }

  const deleteBlogHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteBlog(id))
    }
  }
  const editBlogHandler = (id) => {
    if (id) {
      history.push(`/admin/blog/${id}/edit`)
    }
  }

  useEffect(() => {
    dispatch({ type: CREATE_BLOG_RESET })
    dispatch(getBlogs(null, 100))

    if (successCreateBlog) {
      history.push(`/admin/blog/${createdBlog._id}/edit`)
    }
  }, [dispatch, history, successCreateBlog, createdBlog, successBlogDelete])
  return (
    <>
      <div className={classes.section_container}>
        <div className={classes.controls_container}>
          <div>
            <button onClick={createBlogHandler}>Add A Blog</button>
          </div>
        </div>
        <div className={classes.blogs_container}>
          {loadingBlogs || !blogs ? (
            <Loader beforeColor='black' afterColor='lightgrey' />
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
                    <button onClick={() => deleteBlogHandler(post._id)}>
                      delete
                    </button>
                    <button onClick={() => editBlogHandler(post._id)}>
                      Edit
                    </button>
                  </>
                ) : (
                  <Loader beforeColor='black' afterColor='lightgrey' />
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  )
}

export default withRouter(BlogSection)
