import React, { useState } from 'react'
import axios from 'axios'

// Redux
import { useDispatch, useSelector } from 'react-redux'

// My Components
import FormField from '../../components/FormField'
import Loader from '../../components/Loader'

// Assets
import classes from './ContactScreen.module.css'

const ContactScreen = (props) => {
  const {} = props
  const dispatch = useDispatch()
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    gig: '',
  })
  const [loadingSubmit, setLoadingSubmit] = useState(false)

  const formConfig = {
    name: {
      type: 'input',
      config: { type: 'text', placeholder: 'Name' },
    },
    email: {
      type: 'input',
      config: { type: 'text', placeholder: 'Email' },
    },
    phone: {
      type: 'input',
      config: { type: 'text', placeholder: 'Phone' },
    },
    gig: {
      type: 'input',
      config: { type: 'text', placeholder: 'Gig Description' },
    },
  }
  // Prepare formState objects
  const formElements = []

  for (let key in formState) {
    formElements.push({
      id: key,
      setup: formConfig[key],
      value: formState[key],
    })
  }
  const inputChangedHandler = (event, inputIdentifier) => {
    formElements.forEach((formElement) => {
      if (inputIdentifier === formElement.id) {
        setFormState({
          ...formState,
          [inputIdentifier]: event.target.value,
        })
      }
    })
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    setLoadingSubmit(true)

    const { name, email, phone, gig } = formState
    try {
      await axios.post('/api/send', {
        name,
        email,
        phone,
        gig,
      })
      console.log('Message Sent')
    } catch (error) {
      console.log('Message failed to send')
    }
    setLoadingSubmit(false)
  }
  return (
    <div className={classes.screen_container}>
      <h1>Get Started</h1>

      <form className={classes.form} onSubmit={submitHandler}>
        {formElements.map((formElement) => (
          <FormField
            key={formElement.id}
            type={formElement.setup.type}
            config={formElement.setup.config}
            value={formElement.value}
            changed={(event) => inputChangedHandler(event, formElement.id)}
          />
        ))}
        {loadingSubmit ? <Loader /> : <button type='submit'>Submit</button>}
      </form>
    </div>
  )
}

export default ContactScreen
