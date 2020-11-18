import React, { useState, useEffect } from 'react'
import schema from '../validation/signupSchema'
import * as yup from 'yup'
import axios from 'axios'

const initialSignupValues = {
    username: '',
    phone: '',
    password: '',
    confirmP: '',
}

const initialSignupErrors = {
    username: '',
    phone: '',
    password: '',
}

const initialDisabledSignup = true

export default function SignUp() {
    
    const [signupValues, setSignupValues] = useState(initialSignupValues)
    const [signupErrors, setSignupErrors] = useState(initialSignupErrors)
    const [disabledSignup, setDisabledSignup] = useState(initialDisabledSignup)

      const signupValidate = (name, value) =>{
          yup
          .reach(schema, name)
          .validate(value)
          .then(() =>{
              setSignupErrors({...signupErrors, [name]: '',})
          })
          .catch((err) => {
              setSignupErrors({...signupErrors, [name]: err.errors[0],})
          })
          setSignupValues({...signupValues, [name]: value})
      }

      const signupChange = (evt) => {
          const { name, value } = evt.target
          signupValidate(name, value)
      }
  
      useEffect(() => {
        schema.isValid(signupValues).then((valid) => {
          setDisabledSignup(!valid);
        });
      }, [signupValues]);


    const signupSubmit = (evt) => {
      evt.preventDefault()
      const userCard = {
        username: signupValues.username.trim(),
        phone: signupValues.phone.trim(),
        password: signupValues.password.trim(),
      }
      axios
      .post('https://water-my-plants-buildweek.herokuapp.com/api/auth/login', userCard)
      .then((res) => {
        console.log(res.data)
        setSignupValues(initialSignupValues)
      })
      .catch((err) => {
        console.log(err)
        setSignupValues(initialSignupValues)
      })
    }

    
    return (
        <>
        <div className='signup-container'>
          <h2>Let's Get Savvy</h2>
        </div>
        <form onSubmit={signupSubmit}>
          <label>
            Username
            <input
                name='username'
                type='text'
                value={signupValues.username}
                onChange={signupChange}
            />
          </label>
          <label>
            Phone Number
            <input
                name='phone'
                type='integer'
                value={signupValues.phone}
                onChange={signupChange}
            />
          </label>
          <label>
            Password
          <input
            name='password'
            type='password'
            value={signupValues.password}
            onChange={signupChange}
          />
          </label>
          <label>
            Confirm Password
          <input
            name='confirmP'
            type='password'
            value={signupValues.confirmP}
            onChange={signupChange}
          />
          </label>
          <button type = 'submit' disabled={disabledSignup}>Sign Up</button>
        </form>
        <div>
          <div>{signupErrors.username}</div>
          <div>{signupErrors.phone}</div>
          <div>{signupErrors.password}</div>
          {signupValues.password === signupValues.confirmP ? '' : <div>Passwords do not match</div>}
        </div>
        <h3>Inspiring Quotes</h3>
        <p>"The Grass is greener on the other side" -Unknown</p>
        <p></p>
        <p></p>
      </>
    )
}

