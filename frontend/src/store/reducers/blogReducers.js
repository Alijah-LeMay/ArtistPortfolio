import {
  GET_BLOGS_REQUEST,
  GET_BLOGS_SUCCESS,
  GET_BLOGS_FAIL,
  CREATE_BLOG_REQUEST,
  CREATE_BLOG_SUCCESS,
  CREATE_BLOG_FAIL,
  UPDATE_BLOG_RESET,
  UPDATE_BLOG_REQUEST,
  UPDATE_BLOG_SUCCESS,
  UPDATE_BLOG_FAIL,
  BLOG_DETAILS_REQUEST,
  BLOG_DETAILS_SUCCESS,
  BLOG_DETAILS_FAIL,
  CREATE_BLOG_RESET,
  DELETE_BLOG_REQUEST,
  DELETE_BLOG_SUCCESS,
  DELETE_BLOG_FAIL,
} from '../constants/blogConstants'

export const blogListReducer = (state = { blogs: [] }, action) => {
  switch (action.type) {
    case GET_BLOGS_REQUEST:
      return { loading: true, blogs: [] }
    case GET_BLOGS_SUCCESS:
      return { loading: false, blogs: action.payload }
    case GET_BLOGS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const blogCreateReducer = (state = { blog: {} }, action) => {
  switch (action.type) {
    case CREATE_BLOG_REQUEST:
      return { loading: true, blog: {} }
    case CREATE_BLOG_SUCCESS:
      return { loading: false, success: true, blog: action.payload }
    case CREATE_BLOG_FAIL:
      return { loading: false, error: action.payload }
    case CREATE_BLOG_RESET:
      return {}
    default:
      return state
  }
}
export const blogDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_BLOG_REQUEST:
      return { loading: true }
    case DELETE_BLOG_SUCCESS:
      return { loading: false, success: true }
    case DELETE_BLOG_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const blogDetailsReducer = (state = { blog: {} }, action) => {
  switch (action.type) {
    case BLOG_DETAILS_REQUEST:
      return { loading: true, ...state }
    case BLOG_DETAILS_SUCCESS:
      return { loading: false, success: true, blog: action.payload }
    case BLOG_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const blogUpdateReducer = (state = { blog: {} }, action) => {
  switch (action.type) {
    case UPDATE_BLOG_REQUEST:
      return { loading: true, blog: {} }
    case UPDATE_BLOG_SUCCESS:
      return { loading: false, success: true, blog: action.payload }
    case UPDATE_BLOG_FAIL:
      return { loading: false, error: action.payload }
    case UPDATE_BLOG_RESET:
      return { blog: {} }
    default:
      return state
  }
}
