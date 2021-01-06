import React, { useEffect } from 'react'
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { getImages } from '../../store/actions/imageActions'
// Assets
import classes from './GalleryScreen.module.css'
// MyComponents
import Loader from '../../components/Loader'

const GalleryScreen = () => {
  const dispatch = useDispatch()
  const imageList = useSelector((state) => state.imageList)
  const { loading: loadingImages, images } = imageList
  useEffect(() => {
    dispatch(getImages())
  }, [dispatch])

  return (
    <div className={classes.screen_container}>
      <div className={classes.imagesSlide_container}>
        {loadingImages || !images ? (
          <Loader />
        ) : (
          images.map((item, idx) => (
            <div key={idx}>
              <img
                className={classes.imagesSlide_image}
                src={item.src[0]}
                alt={item.alt}
              />
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default GalleryScreen
