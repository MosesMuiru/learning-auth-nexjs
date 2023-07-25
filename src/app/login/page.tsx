'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'

import React, { useState } from 'react'

function page() {

    const [user,setUser] = useState({
        email:"",
        password:"",

    })

    const onLogin = async () => {

    }
  return (
    <div className='flex flex-col items-center bg-black text-white justify-center min-h-screen py-2'>
        <h1>Login</h1>
        
     

<label htmlFor="" className='my-4 capitalize'>email</label>

<input type="text"
className='p-3 border border-black'

id='email'
typeof='email'
value={user.email}
onChange={(e) => setUser({...user,email:e.target.value})}

/>

<label htmlFor="" className='my-4 capitalize'>password</label>

<input type="text"
className='p-3 border border-black'

id='password'
typeof='password'
value={user.password}
onChange={(e) => setUser({...user,password:e.target.value})}

/>

<button
onClick={onLogin} 
className='p-2 border border-white text-white my-3'
>Sign up here</button>

<Link href="/signup"  className='text-white'> Visit sign In page</Link>
    </div>

  )
}

export default page