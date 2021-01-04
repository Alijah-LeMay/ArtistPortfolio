import React, { useState, useEffect } from 'react'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../store/actions/userActions'

// My Components
import FormField from '../../components/FormField'
const LoginScreen = (props) => {
  const { history } = props
  const dispatch = useDispatch()
  const [formState, setFormState] = useState({
    email: { value: '' },
    password: { value: '' },
  })
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo, error } = userLogin

  const formConfig = {
    email: {
      type: 'input',
      config: { type: 'email', placeholder: 'Your Email' },
    },
    password: {
      type: 'input',
      config: { type: 'text', placeholder: 'Your password' },
    },
  }
  // Prepare formState objects
  const formElements = []
  for (let key in formState) {
    formElements.push({ id: key, setup: formConfig[key] })
  }
  useEffect(() => {
    if (userInfo) {
      history.push('/admin')
    }
  }, [userInfo, history])

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

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(formState.email, formState.password)
    dispatch(login(formState.email, formState.password))
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <h2>Administrator Login</h2>
        {formElements.map((formElement) => (
          <FormField
            key={formElement.id}
            type={formElement.setup.type}
            config={formElement.setup.config}
            value={formElement.setup.value}
            changed={(event) => inputChangedHandler(event, formElement.id)}
          />
        ))}
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default LoginScreen
