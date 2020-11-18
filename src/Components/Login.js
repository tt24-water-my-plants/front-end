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
      setLoginValues({
        ...loginValues, [name] : value
      })
    }
      
    const change = (evt) => {
      const { name, value } = evt.target
      loginValidate(name, value)
    }

    useEffect(() => {
      schema.isValid(loginValues).then((valid) => {
        setDisabled(!valid);
      });
    }, [loginValues]);


    
      const loginSubmit = (evt) => {
        evt.preventDefault()
        const userCard = {
          name: loginValues.name,
          password: loginValues.password
        }
        axios
        .post('https://water-my-plants-buildweek.herokuapp.com/api/auth/login', userCard)
        .then((res) => {
          console.log(res.data)
          setLoginValues(initialLoginValues)
        })
        .catch((err) => {
          console.log(err)
          setLoginValues(initialLoginValues)
        })
      }
            
    return (
      <>
        <div className='login-container'>
          <h1>Welcome Back</h1>
        </div>
        <form onSubmit={loginSubmit}>
          <label>
            Name
            <input
              name='name'
              type='text'
              value={loginValues.name}
              onChange={change}
            />
          </label>
          <label>
            Password
            <input
              name='password'
              type='password'
              value={loginValues.password}
              onChange={change}
            />
          </label>
          <button type= 'submit' disabled={disabled}>Sign In</button>
        </form>
        <h5>Forgot Password</h5>
        <div>
          <div>{loginErrors.name}</div>
          <div>{loginErrors.password}</div>
        </div>
      </>
   )
}