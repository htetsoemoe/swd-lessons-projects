import React, { useState } from 'react'
import { TextInput } from '@mantine/core';
import { PasswordInput } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../redux/api/authApi';

const Register = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password_confirmation, setPasswordConfirmation] = useState("")

  const navigate = useNavigate()

  const [register] = useRegisterMutation()

  // Submit event handler
  const registerHandler = async (event) => {
    try {
      event.preventDefault()
      const user = { name, email, password, password_confirmation }
      const {data} = await register(user) // returns Promise object
      //console.log(data.data)

      if (data?.success === true) {
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <form onSubmit={registerHandler} className='flex flex-col w-96 gap-10 shadow-lg p-7'>
        <h2 className='text-zinc-900 text-2xl font-semibold'>Register</h2>

        <TextInput value={name} onChange={e => setName(e.target.value)} placeholder='Enter your name' />

        <TextInput value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter your email' />

        <PasswordInput value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter your password' />

        <PasswordInput value={password_confirmation} onChange={e => setPasswordConfirmation(e.target.value)} placeholder='Confirm your password' />

        <div className="flex gap-7">
          <p className='select-none text-zinc-800'>Already have an account?</p>
          <Link to={'/login'}>
            <p className='cursor-pointer underline select-none text-zinc-800'>Login</p>
          </Link>
        </div>

        <button type="submit" className='px-5 py-2 bg-zinc-900 text-white rounded'>Sign Up</button>
      </form>
    </div>
  )
}

export default Register
