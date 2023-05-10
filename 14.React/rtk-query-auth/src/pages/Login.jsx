import React, { useState } from 'react'
import { Loader, TextInput } from '@mantine/core';
import { PasswordInput } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../redux/api/authApi';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/services/authSlice';
import { useForm } from '@mantine/form';

const Login = () => {
  
  const navigate = useNavigate()
  const [login, {isLoading}] = useLoginMutation()

  // for add login user to global state using rtk
  const dispatch = useDispatch()

  // Using Mantine use-form
  const form = useForm({
    initialValues: {
      email: 'kohtetmdy@gmail.com',
      password: '123456789',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => value.length < 8 ? "Password must have at least 8 letters" : null,
    },
  });

  return (
    <div className='flex justify-center items-center h-screen'>
      <form onSubmit={form.onSubmit(async (values) => {
        try {
          const { data } = await login(values)
          console.log(data) // this is promise object
          console.log(values)
          // set successfully user object and token in browser cookie
          dispatch(addUser({ user: data?.user, token: data?.token }))

          // If login success, navigate to dashboard
          if (data?.success === true) {
            navigate('/')
          }
        } catch (error) {
          console.log(error)
        }
      })}
        className='flex flex-col w-96 gap-10 shadow-lg p-7'>
        <h2 className='text-zinc-900 text-2xl font-semibold'>Log In</h2>

        <TextInput
          name='email'
          {...form.getInputProps('email')}
          placeholder='Enter your email' />

        <PasswordInput
          name='password'
          {...form.getInputProps('password')}
          placeholder='Enter your password' />

        <div className="flex gap-7">
          <p className='select-none text-zinc-800'>Already have an account?</p>
          <Link to={'/register'}>
            <p className='cursor-pointer underline select-none text-zinc-800'>Register</p>
          </Link>
        </div>

        <button disabled={isLoading && true}
          type="submit" 
          className='px-5 py-2 bg-zinc-900 text-white rounded'>
          {isLoading ? (<Loader className='mx-auto block'/>): "Log In"}    
        </button>
      </form>
    </div>
  )
}

export default Login

/**
   * Before using mantine use-form
   * 
   * const [email, setEmail] = useState("kohtetmdy@gmail.com")
   * const [password, setPassword] = useState("123456789")  
   * const loginHandler = async (event) => {
      try {
        event.preventDefault()
        const user = { email, password }
        const { data } = await login(user);
        dispatch(addUser({ user: data?.user, token: data?.token }))
        console.log(data)
        if (data?.success) {
          navigate("/")
        }
      } catch (error) {
        console.log(error)
      }
    }
   */
