import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Assets
import classes from './AdminScreen.module.css'

const AdminScreen = () => {
  const dispatch = useDispatch()

  const [images, setImages] = useState([])
  const [uploading, setUploading] = useState(false)

  const imagesArray = []
  for (let key in images) {
    imagesArray.push(images[key])
  }

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)
    try {
      const config = {
        headers: { 'Content-Type': 'multipart/form-data' },
      }

      const { data } = await axios.post('/api/upload', formData, config)

      imagesArray.push(data)
      setImages(imagesArray)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)
    try {
      const config = {
        headers: { 'Content-Type': 'multipart/form-data' },
      }

      const { data } = await axios.post('/api/upload', formData, config)

      imagesArray.push(data)
      setImages(imagesArray)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateGallery({
        images: images,
      })
    )
  }
  const imageDeleteHandler = (id) => {
    const imageIndex = images.indexOf(id)
    image.splice(imageIndex, 1)
    console.log(imageIndex)
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        {image.map((item, index) => (
          <div className={classes.imageBox_container} key={index}>
            <img src={item} style={{ width: '100px' }} alt={item} />
            <button onClick={() => imageDeleteHandler(item)}>Delete</button>
          </div>
        ))}
        <input type='file' onChange={uploadFileHandler} name={image} />
        {uploading && <div>...loading...</div>}
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AdminScreen
