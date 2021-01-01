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

export default combineReducers({
  userLogin: userLoginReducer,
  blogList: blogListReducer,
  blogCreate: blogCreateReducer,
  blogUpdate: blogUpdateReducer,
  blogDetails: blogDetailsReducer,
  blogDelete: blogDeleteReducer,
})
