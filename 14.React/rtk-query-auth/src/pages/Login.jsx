import React, { useState } from 'react'
import { TextInput } from '@mantine/core';
import { PasswordInput } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../redux/api/authApi';

const Login = () => {
  const [email, setEmail] = useState("kohtetmdy@gmail.com")
  const [password, setPassword] = useState("123456789")

  const navigate = useNavigate()
  const [login] = useLoginMutation()

  const loginHandler = async (event) => {
    try {
      event.preventDefault()
      const user = { email, password }
      const {data} = await login(user);
      console.log(data)
      if (data?.success) {
        navigate("/")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <form onSubmit={loginHandler} className='flex flex-col w-96 gap-10 shadow-lg p-7'>
        <h2 className='text-zinc-900 text-2xl font-semibold'>Log In</h2>

        <TextInput value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter your email' />
        <PasswordInput value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter your password' />

        <div className="flex gap-7">
          <p className='select-none text-zinc-800'>Already have an account?</p>
          <Link to={'/login'}>
            <p className='cursor-pointer underline select-none text-zinc-800'>Login</p>
          </Link>
        </div>

        <button type="submit" className='px-5 py-2 bg-zinc-900 text-white rounded'>Log In</button>
      </form>
    </div>
  )
}

export default Login
