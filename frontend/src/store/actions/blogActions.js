import axios from 'axios'
import {
  GET_BLOGS_REQUEST,
  GET_BLOGS_SUCCESS,
  GET_BLOGS_FAIL,
  UPDATE_BLOG_SUCCESS,
  UPDATE_BLOG_FAIL,
  UPDATE_BLOG_REQUEST,
  CREATE_BLOG_SUCCESS,
  CREATE_BLOG_FAIL,
  CREATE_BLOG_REQUEST,
  BLOG_DETAILS_REQUEST,
  BLOG_DETAILS_SUCCESS,
  BLOG_DETAILS_FAIL,
  DELETE_BLOG_REQUEST,
  DELETE_BLOG_SUCCESS,
  DELETE_BLOG_FAIL,
} from '../constants/blogConstants'

export const getBlogs = () => async (dispatch) => {
  try {
    dispatch({ type: GET_BLOGS_REQUEST })

    const { data } = await axios.get('/api/blog')

    dispatch({
      type: GET_BLOGS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: GET_BLOGS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getBlogDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: BLOG_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/blog/${id}`)

    dispatch({
      type: BLOG_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: BLOG_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const createBlog = () => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_BLOG_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post('/api/blog', {}, config)

    dispatch({
      type: CREATE_BLOG_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: CREATE_BLOG_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const deleteBlog = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_BLOG_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.delete(`/api/blog/${id}`, config)

    dispatch({
      type: DELETE_BLOG_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: DELETE_BLOG_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const updateBlog = (blog) => async (dispatch, getState) => {
  try {
    dispatch({ type: UPDATE_BLOG_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(`/api/blog/${blog._id}`, blog, config)

    dispatch({
      type: UPDATE_BLOG_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: UPDATE_BLOG_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
