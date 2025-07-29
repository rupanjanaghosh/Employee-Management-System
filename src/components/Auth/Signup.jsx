import React, { useState } from 'react'

const Signup = ({ handleSignup, goToLogin }) => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    // Pass all required fields to handleSignup
    handleSignup({ firstName, email, password })
    setFirstName('')
    setEmail('')
    setPassword('')
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form
          onSubmit={submitHandler}
          className='flex flex-col items-center justify-center'
        >
          <input
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            required
            className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400'
            type='text'
            placeholder='Enter your first name'
          />
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400'
            type='email'
            placeholder='Enter your email'
          />
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400'
            type='password'
            placeholder='Enter password'
          />
          <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full'>
            Sign up
          </button>
        </form>
        <button
          onClick={goToLogin}
          className='mt-4 text-emerald-600 underline bg-transparent border-none'
        >
          Already have an account? Log in
        </button>
      </div>
    </div>
  )
}

export default Signup