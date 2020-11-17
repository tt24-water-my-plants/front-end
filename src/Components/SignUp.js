// import React, { useState } from 'react'

// export default function SignUp() {
    
//     const [users, setUsers] = useState([])
    
//     const newUser = {
//         name: loginValues.name.trim(),
//         password: loginValues.password.trim(),
//       }
  
//       const getUsers = () => {
//         axios.get('https://reqres.in/api/users')
//         .then((res) => {
//           setUsers(res.data)
//         })
//         .catch((err) => {
//           console.log(err)
//         })
//       }
  
  
  
//       const postNewUser = evt => {
//         evt.preventDefault()
//         console.log('Login submitted!')
//         axios.post('https://reqres.in/api/users', newUser)
//         .then((res) => {
//           setUsers([res.data, ...users])
//           setLoginErrors(initialLoginErrors)
//         })
//         .catch((err) => {
//           console.log(err)
//         })
//       }
    
    
    
    
    
//     return (
//         <>
//         <div className='signup-container'>
//           <h1>Let's Get Savvy</h1>
//         </div>
//         <form>
//           <input
//             name='username'
//             type='text'
//             value={signupValues.username}
//             onChange={change}
//           />
//           <input
//             name='phone number'
//             type='integer'
//             value={signupValues.password}
//             onChange={change}
//           />
//           <input
//             name='password'
//             type='text'
//             value={signupValues.password}
//             onChange={change}
//           />
//         </form>
//         <button>Sign In</button>
//       </>
//     )
// }

// export default SignUp
