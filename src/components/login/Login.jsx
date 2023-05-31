import React, { useState } from 'react'

const Login = () => {

  const [userName, setUserName] = useState("")  
  const [email, setEmail] = useState("")  

  return (
    <div>
        <div>
            <label htmlFor="userName" >Username</label>
            <input type="text" onChange={() => setUserName}/>
        </div>
        <div>
            <label htmlFor="email" >Email</label>
            <input type="email" name="email" />
        </div>
        <div>
            <label htmlFor="password" >Password</label>
            <input type="password" name="password" />
        </div>
    </div>
  )
}

export default Login