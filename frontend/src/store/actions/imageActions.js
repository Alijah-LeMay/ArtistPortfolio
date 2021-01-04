import axios from 'axios'
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
} from '../constants/imageConstants'

export const getImages = () => async (dispatch) => {
  try {
    dispatch({ type: GET_IMAGES_REQUEST })

    const { data } = await axios.get('/api/image')

    dispatch({
      type: GET_IMAGES_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: GET_IMAGES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const createImage = () => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_IMAGE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post('/api/image', {}, config)

    dispatch({
      type: CREATE_IMAGE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: CREATE_IMAGE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const getImageDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: IMAGE_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/image/${id}`)

    dispatch({
      type: IMAGE_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: IMAGE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const deleteImage = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_IMAGE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.delete(`/api/image/${id}`, config)

    dispatch({
      type: DELETE_IMAGE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: DELETE_IMAGE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const updateImage = (image) => async (dispatch, getState) => {
  try {
    dispatch({ type: UPDATE_IMAGE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(`/api/image/${image._id}`, image, config)

    dispatch({
      type: UPDATE_IMAGE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: UPDATE_IMAGE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
