import { combineReducers } from 'redux'

// import reducers
import { userLoginReducer } from './userReducers'
import {
  blogListReducer,
  blogCreateReducer,
  blogUpdateReducer,
  blogDetailsReducer,
  blogDeleteReducer,
} from './blogReducers'
import {
  imageCreateReducer,
  imageDeleteReducer,
  imageDetailsReducer,
  imageListReducer,
  imageUpdateReducer,
} from './imageReducers'

export default combineReducers({
  userLogin: userLoginReducer,
  blogList: blogListReducer,
  blogCreate: blogCreateReducer,
  blogUpdate: blogUpdateReducer,
  blogDetails: blogDetailsReducer,
  blogDelete: blogDeleteReducer,
  imageList: imageListReducer,
  imageCreate: imageCreateReducer,
  imageDelete: imageDeleteReducer,
  imageDetails: imageDetailsReducer,
  imageUpdate: imageUpdateReducer,
})
