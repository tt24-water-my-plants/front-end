import React, { useState, useEffect } from 'react'
import schema from '../validation/loginSchema'
import * as yup from 'yup'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const initialLoginValues = {username: '', password: ''}
const initialLoginErrors = {
  username: '',
  password: '',
}
const initialDisabled = true

export default function Login() {

  const { push } = useHistory();

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
          username: loginValues.username,
          password: loginValues.password
        }
        axios
          .post('https://water-my-plants-buildweek.herokuapp.com/api/auth/login', userCard)
          .then((res) => {
            console.log('successful login: ', res.data)
            window.localStorage.setItem('token', res.data.token);
            setLoginValues(initialLoginValues)
            push('/Plants')
          })
          .catch((err) => {
            console.log('Login Unsuccessful: ', err)
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
              name='username'
              type='text'
              value={loginValues.username}
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
          <div>{loginErrors.username}</div>
          <div>{loginErrors.password}</div>
        </div>
      </>
   )
}