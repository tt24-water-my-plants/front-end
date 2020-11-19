import React, { useState, useEffect } from 'react'
import schema from '../validation/signupSchema'
import * as yup from 'yup'
import axios from 'axios'
import "../App.css"

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
          <h1>Let's Get Savvy</h1>
        </div>
        <form className='signup-form'onSubmit={signupSubmit}>
          <label>
            Username
            <br></br>
            <input
                name='username'
                type='text'
                value={signupValues.username}
                onChange={signupChange}
                placeholder='johndoe@email.com'
            />
          </label>
          <label>
            Phone Number
            <br></br>
            <input
                name='phone'
                type='integer'
                value={signupValues.phone}
                onChange={signupChange}
                placeholder='XXXXXXXXXX'
            />
          </label>
          <label>
            Password
            <br></br>
          <input
            name='password'
            type='password'
            value={signupValues.password}
            onChange={signupChange}
            placeholder='At least 5 characters'
          />
          </label>
          <label>
            Confirm Password
            <br></br>
          <input
            name='confirmP'
            type='password'
            value={signupValues.confirmP}
            onChange={signupChange}
            placeholder='Re-enter password'
            
          />
          </label>
          <button className= 'signup-button'type = 'submit' disabled={disabledSignup}>Sign Up</button>
          <div className= 'quotes'>
          <h3>Inspiring Quotes</h3>
        <p>"The Grass is greener on the other side" -Unknown</p>
        <p>“Eat food. Not too much. Mostly plants.”
          -Michael Pollan
        </p>
        <p>“We are made for loving. If we don’t love, we will be like plants without water.”
― Desmond Tutu</p>
<p>“Love and work are to people what water and sunshine are to plants.”
― Jonathan Haidt</p>
        </div>
        </form>
        <div>
          <div>{signupErrors.username}</div>
          <div>{signupErrors.phone}</div>
          <div>{signupErrors.password}</div>
          {signupValues.password === signupValues.confirmP ? '' : <div>Passwords do not match</div>}
        </div>
        
      </>
    )
}

