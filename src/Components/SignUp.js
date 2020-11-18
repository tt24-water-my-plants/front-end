import React, { useState, useEffect } from 'react'
import schema from '../validation/signupSchema'
import * as yup from 'yup'
import axios from 'axios'

const initialSignupValues = {
    username: '',
    phone: '',
    password: '',
    // confirmP: '',
}

const initialSignupErrors = {
    username: '',
    phone: '',
    password: '',
    // confirmP: '',
}

const initialDisabledSignup = true

export default function SignUp() {
    
    const [signupValues, setSignupValues] = useState(initialSignupValues)
    const [signupErrors, setSignupErrors] = useState(initialSignupErrors)
    const [disabledSignup, setDisabledSignup] = useState(initialDisabledSignup)
    // const [users, setUsers] = useState([])
    
    // const newUser = {
    //     username: signupValues.username.trim(),
    //     phone: signupValues.phone.trim(),
    //     password: signupValues.phone.trim()
    //   }

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
      }

      const signupChange = (evt) => {
          const { name, value } = evt.target
          setSignupValues({...signupValues, [name]: value})
          signupValidate(name, value)
      }
  
      useEffect(() => {
        schema.isValid(signupValues)
        .then((valid) => {
          setDisabledSignup(!valid)
        })
      }, [signupValues])

    //   const getUsers = () => {
    //     axios.get('https://reqres.in/api/users')
    //     .then((res) => {
    //       setUsers(res.data)
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     })
    //   }
  
    //   const postNewUser = evt => {
    //     evt.preventDefault()
    //     console.log('Login submitted!')
    //     axios.post('https://reqres.in/api/users', newUser)
    //     .then((res) => {
    //       setUsers([res.data, ...users])
    //       setSignupErrors(initialSignupErrors)
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     })
    //   }

      const signupFormSubmit = (() =>{
        axios
        .post()
        .then(() => {
            setSignupValues(initialSignupValues)
            console.log(initialSignupValues)
      })
      .catch((err) => {
        console.log(err)
        })
      })

      const signupSubmit = (evt) => {
        evt.preventDefault()
        signupFormSubmit()
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
          {/* <label>
            Confirm Password
          <input
            name='confirmP'
            type='password'
            value={signupValues.confirmP}
            onChange={signupChange}
          />
          </label> */}
        </form>
        <button disabled={disabledSignup}>Sign Up</button>
        <div>
          <div>{signupErrors.username}</div>
          <div>{signupErrors.phone}</div>
          <div>{signupErrors.password}</div>
          {/* <div>{signupErrors.confirmP}</div> */}
        </div>
        <h3>Inspiring Quotes</h3>
        <p>"The Grass is greener on the other side" -Unknown</p>
        <p></p>
        <p></p>
      </>
    )
}

