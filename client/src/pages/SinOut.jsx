import React from 'react'
import { Link } from 'react-router-dom'

export default function SinOut() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type='text' placeholder='username' className='border p-3 rounded-lg' id='username'></input>
        <input type='email' placeholder='email' className='border p-3 rounded-lg' id='email'></input>
        <input type='password' placeholder='password' className='border p-3 rounded-lg' id='password'></input>
        <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-65'>Sign Up</button>
      </form>
      <div className='flex gap-4 mt-3'>
        Have an Account
        <Link to='/sinin'>
          <span className='text-blue-700'>Sign In</span>
          </Link>
      </div>
    </div>
  )
}
