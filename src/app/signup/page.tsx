'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'

import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

function page() {
    const router = useRouter()

    const [user,setUser] = useState({
        email:"",
        password:"",
        username:"",
    })
    const [buttonDisabled,setButtonDisabled] = useState<boolean>(false)
    const [loading,setLoading] = useState(false)

    const onsignUp = async () => {
        console.log("on sign up clicked")
        try {
            // set loading
            setLoading(true)
            // post
        let response=   await axios.post("/api/user/signup", user)
        console.log("Sign success", response.data)

        router.push("/login")
        } catch (error:any) {
            console.log("sign up failed", error.message)

            toast.error(error.message)
        }
        finally{
            setLoading(false)
        }

    }

    // when there is a nini in the input the user can click the 
    useEffect(() => {
                if(user.email.length > 0 && user.password.length>0 && user.username.length>0){
                    setButtonDisabled(false)
                }
                else{
                    setButtonDisabled(true)
                }
    },[user])

  return (
    <div className='flex flex-col items-center bg-black text-white justify-center min-h-screen py-2'>

        <h1>{loading ? "sign up":"processing"}</h1>

        <label htmlFor="" className='my-4 capitalize'>username</label>

        <input type="text"
        className='p-3 border border-black text-black'

        id='username'
        typeof='text'
        value={user.username}
        onChange={(e) => setUser({...user,username:e.target.value})}
        
        />

<label htmlFor="" className='my-4 capitalize'>email</label>

<input type="text"
className='p-3 border border-black text-black'

id='email'
typeof='email'
value={user.email}
onChange={(e) => setUser({...user,email:e.target.value})}

/>

<label htmlFor="" className='my-4 capitalize'>password</label>

<input type="text"
className='p-3 border border-black text-black'

id='password'
typeof='password'
value={user.password}
onChange={(e) => setUser({...user,password:e.target.value})}

/>

<button
onClick={onsignUp} 
className='p-2 border border-white text-white my-3'
>{buttonDisabled ? "no sign up":"Sign up"}</button>

<Link href="/login"  className='text-white'> Visit Login page</Link>
    </div>

  )
}

export default page