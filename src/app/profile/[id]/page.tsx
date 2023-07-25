import React from 'react'

function UserProfile({params}:any) {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <h1>profile</h1>
        <hr />
        <p className='text-4xl'>Profile page</p>
        <span className='border border-black bg-orange-700 p-3 text-3xl text-black'> {params.id}</span>

    </div>
  )
}

export default UserProfile