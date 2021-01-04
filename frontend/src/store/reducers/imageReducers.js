import {
  GET_IMAGES_REQUEST,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAIL,
  CREATE_IMAGE_REQUEST,
  CREATE_IMAGE_SUCCESS,
  CREATE_IMAGE_FAIL,
  IMAGE_DETAILS_REQUEST,
  IMAGE_DETAILS_SUCCESS,
  IMAGE_DETAILS_FAIL,
  UPDATE_IMAGE_REQUEST,
  UPDATE_IMAGE_SUCCESS,
  UPDATE_IMAGE_FAIL,
  DELETE_IMAGE_REQUEST,
  DELETE_IMAGE_SUCCESS,
  DELETE_IMAGE_FAIL,
  UPDATE_IMAGE_RESET,
  CREATE_IMAGE_RESET,
} from '../constants/imageConstants'

export const imageListReducer = (state = { images: [] }, action) => {
  switch (action.type) {
    case GET_IMAGES_REQUEST:
      return { loading: true, images: [] }
    case GET_IMAGES_SUCCESS:
      return { loading: false, images: action.payload }
    case GET_IMAGES_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const imageCreateReducer = (state = { image: {} }, action) => {
  switch (action.type) {
    case CREATE_IMAGE_REQUEST:
      return { loading: true, image: {} }
    case CREATE_IMAGE_SUCCESS:
      return { loading: false, success: true, image: action.payload }
    case CREATE_IMAGE_FAIL:
      return { loading: false, error: action.payload }
    case CREATE_IMAGE_RESET:
      return {}
    default:
      return state
  }
}
export const imageDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_IMAGE_REQUEST:
      return { loading: true }
    case DELETE_IMAGE_SUCCESS:
      return { loading: false, success: true }
    case DELETE_IMAGE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const imageDetailsReducer = (state = { image: {} }, action) => {
  switch (action.type) {
    case IMAGE_DETAILS_REQUEST:
      return { loading: true, ...state }
    case IMAGE_DETAILS_SUCCESS:
      return { loading: false, success: true, image: action.payload }
    case IMAGE_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const imageUpdateReducer = (state = { image: {} }, action) => {
  switch (action.type) {
    case UPDATE_IMAGE_REQUEST:
      return { loading: true, image: {} }
    case UPDATE_IMAGE_SUCCESS:
      return { loading: false, success: true, image: action.payload }
    case UPDATE_IMAGE_FAIL:
      return { loading: false, error: action.payload }
    case UPDATE_IMAGE_RESET:
      return { image: {} }
    default:
      return state
  }
}
