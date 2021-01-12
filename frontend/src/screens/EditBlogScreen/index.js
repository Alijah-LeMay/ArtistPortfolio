import React, { useState, useEffect } from 'react'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_BLOG_RESET } from '../../store/constants/blogConstants'
import { getBlogDetails, updateBlog } from '../../store/actions/blogActions'

// My Components
import FormField from '../../components/FormField'

// Assets

import classes from './EditBlogScreen.module.css'
import { Link } from 'react-router-dom'

const EditBlogScreen = (props) => {
  const { match, history } = props
  const dispatch = useDispatch()
  const blogId = match.params.id

  const blogDetails = useSelector((state) => state.blogDetails)
  const { blog } = blogDetails

  const blogUpdate = useSelector((state) => state.blogUpdate)
  const { success: successUpdate } = blogUpdate

  const [formState, setFormState] = useState({
    title: '',
    image: '',
    content: '',
    description: '',
  })

  const formConfig = {
    title: {
      type: 'input',
      config: { type: 'text', placeholder: 'Blog Title' },
    },
    image: {
      type: 'input',
      config: { type: 'text', placeholder: 'Blog Image' },
    },
    content: {
      type: 'textarea',
      config: { type: 'text', placeholder: 'Blog Content' },
    },
    description: {
      type: 'input',
      config: { type: 'text', placeholder: 'Blog Description' },
    },
  }
  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: UPDATE_BLOG_RESET })

      history.push('/admin')
    } else {
      if (!blog || blogId !== blog._id) {
        dispatch(getBlogDetails(blogId))
      } else {
        setFormState({
          title: blog.title,
          image: blog.image,
          content: blog.content,
          description: blog.description,
        })
      }
    }
  }, [dispatch, blog, history, blogId, successUpdate])
  // Prepare formState objects
  const formElements = []

  for (let key in formState) {
    formElements.push({
      id: key,
      setup: formConfig[key],
      value: formState[key],
    })
  }

  const inputChangedHandler = (event, inputIdentifier) => {
    formElements.forEach((formElement) => {
      if (inputIdentifier === formElement.id) {
        setFormState({
          ...formState,
          [inputIdentifier]: event.target.value,
        })
      }
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateBlog({
        _id: blogId,
        title: formState.title,
        image: formState.image,
        content: formState.content,
        description: formState.description,
      })
    )
  }

  return (
    <div className={classes.screen_container}>
      <Link to='/admin'>Go Back</Link>
      <h2>Edit Blog</h2>
      <form className={classes.form} onSubmit={submitHandler}>
        {formElements.map((formElement) => (
          <FormField
            key={formElement.id}
            type={formElement.setup.type}
            config={formElement.setup.config}
            value={formElement.value}
            changed={(event) => inputChangedHandler(event, formElement.id)}
          />
        ))}

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default EditBlogScreen
