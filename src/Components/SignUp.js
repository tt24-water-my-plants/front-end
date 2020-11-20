import React, { useState, useEffect } from 'react'
import schema from '../validation/signupSchema'
import * as yup from 'yup'
import axios from 'axios'
import "../App.css"
import { useHistory } from 'react-router-dom';

const initialSignupValues = {
    username: '',
    phone_number: '',
    password: '',
    confirmP: '',
}

const initialSignupErrors = {
    username: '',
    phone_number: '',
    password: '',
}

const initialDisabledSignup = true

export default function SignUp() {

  const { push } = useHistory();
    
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
        password: signupValues.password.trim(),
        phone_number: signupValues.phone_number.trim(),
      }
      console.log(userCard);
      axios
        .post('https://water-my-plants-buildweek.herokuapp.com/api/auth/register', userCard)
        .then((res) => {
          // console.log('data: ', res.data)
          setSignupValues(initialSignupValues)
          window.localStorage.setItem('username', res.data.username);
          window.localStorage.setItem('uid', res.data.id);
          push('/login');
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
                name='phone_number'
                type='integer'
                value={signupValues.phone_number}
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
          <button type = 'submit'
           disabled={disabledSignup}
           >Sign Up</button>
        </form>
        <div>
          <div>{signupErrors.username}</div>
          <div>{signupErrors.phone_number}</div>
          <div>{signupErrors.password}</div>
          {signupValues.password === signupValues.confirmP ? '' : <div>Passwords do not match</div>}
        </div>
        
      </>
    )
}

