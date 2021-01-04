import React, { useEffect } from 'react'

// Assets
import classes from './AdminScreen.module.css'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { CREATE_IMAGE_RESET } from '../../store/constants/imageConstants'
import { createImage, getImages } from '../../store/actions/imageActions'
import { logout } from '../../store/actions/userActions'

const AdminScreen = (props) => {
  const { history } = props
  const dispatch = useDispatch()

  // Get user login from state
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const imageCreate = useSelector((state) => state.imageCreate)
  const { success: successCreateImage, image: createdImage } = imageCreate

  const imageList = useSelector((state) => state.imageList)
  const { success: successLoadImages, images: gallery } = imageList

  const createImageHandler = (e) => {
    e.preventDefault()
    dispatch(createImage())
  }
  const logoutHandler = (e) => {
    e.preventDefault()
    dispatch(logout())
  }

  useEffect(() => {
    dispatch({ type: CREATE_IMAGE_RESET })
    // Check if user info / Admin
    if (!userInfo || !userInfo.isAdmin) {
      history.push('/login')
    }

    dispatch(getImages())

    if (successCreateImage) {
      history.push(`/admin/image/${createdImage._id}/edit`)
    }
  }, [userInfo, dispatch, history, successCreateImage, createdImage])
  return (
    <div>
      Welcome
      <button onClick={createImageHandler}>Add an image</button>
      <button onClick={logoutHandler}>Logout</button>
      <div>
        {gallery.map((item, idx) => (
          <img src={item.src[0]} />
        ))}
      </div>
    </div>
  )
}
export default AdminScreen
