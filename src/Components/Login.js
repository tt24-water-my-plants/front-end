import React, { useState, useEffect } from 'react'
import schema from '../validation/loginSchema'
import * as yup from 'yup'
import axios from 'axios'

const initialLoginValues = {name: '', password: ''}
const initialLoginErrors = {
  name: '',
  password: '',
}
const initialDisabled = true

export default function Login() {
    const [loginValues, setLoginValues] = useState(initialLoginValues)
    const [loginErrors, setLoginErrors] = useState(initialLoginErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    const loginValidate = (name, value) => {
      yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setLoginErrors({...loginErrors, [name]: '',})
      })
      .catch((err) => {
      setLoginErrors({...loginErrors, [name]: err.errors[0],})
      })
      // setLoginValues({
      //   ...loginValues, 
      //   [name] : value
      // })
    }
      
    const change = (evt) => {
      const { name, value } = evt.target
      setLoginValues({...loginValues, [name] : value})
      loginValidate(name, value)
    }

    useEffect(() => {
      schema.isValid(loginValues)
      .then((valid) => {
        setDisabled(!valid)
      })
    }, [loginValues])

    const formSubmit = (() => {
      axios
      .post()
      .then(() => {
        setLoginValues(initialLoginValues)
        console.log(initialLoginValues)
      })
      .catch((err) =>{
        console.log(err)
      })
    })
    
      const loginSubmit = (evt) => {
        evt.preventDefault()
        formSubmit()
      }
            
    return (
      <>
        <div className='login-container'>
          <h1>Welcome Back</h1>
        </div>
        <form onSubmit={loginSubmit}>
          <input
            name='name'
            type='text'
            value={loginValues.name}
            onChange={change}
          />
          <input
            name='password'
            type='password'
            value={loginValues.password}
            onChange={change}
          />
        </form>
        <h5>Forgot Password</h5>
        <button disabled={disabled}>Sign In</button>
      </>
   )
}