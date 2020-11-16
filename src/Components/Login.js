import React, { useState } from 'react'
import axios from 'axios'

const initialLoginValues = {username: '', password: ''}

export default function Login() {
    const [users, setUsers] = useState([])
    const [loginValues, setLoginValues] = useState(initialLoginValues)

    const change = (evt) => {
      const { name, value } = evt.target
      setLoginValues({...loginValues, [name] : value})
      console.log(initialLoginValues)
    }

    
      const newUser = { 
        username: loginValues.username.trim(),
        password: loginValues.password.trim(),
    }


    return (
      <>
        <div className='login-container'>
          <h1>Welcome Back</h1>
        </div>
        <form>
          <input
            name='username'
            type='text'
            value={loginValues.username}
            onChange={change}
          />
          <input
            name='password'
            type='text'
            value={loginValues.password}
            onChange={change}
          />
        </form>
        <h5>Forgot Password</h5>
        <button>Sign In</button>
      </>
   )
}