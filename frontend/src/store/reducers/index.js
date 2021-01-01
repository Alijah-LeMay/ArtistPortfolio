import { combineReducers } from 'redux'

// import reducers
import { userLoginReducer } from '../reducers/userReducer'

export default combineReducers({
  userLogin: userLoginReducer,
})
