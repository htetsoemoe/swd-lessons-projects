import React, { useState } from 'react'
import { Loader, TextInput } from '@mantine/core';
import { PasswordInput } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../redux/api/authApi';
import { useForm } from '@mantine/form';

const Register = () => {
  // Using Mantine use-form
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    },

    validate: {
      name: (value) => value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => value.length < 8 ? "Password must have at least 8 letters" : null,
    },
  });

  const navigate = useNavigate()
  const [register, { isLoading, isFetching }] = useRegisterMutation()

  return (
    <div className='flex justify-center items-center h-screen'>
      <form onSubmit={form.onSubmit(async (values) => {
        try {
          const { data } = await register(values)
          console.log(data)
          console.log(values)
          if (data?.success === true) {
            navigate('/login')
          }
        } catch (error) {
          console.log(error)
        }
      })}
        className='flex flex-col w-96 gap-10 shadow-lg p-7'>
        <h2 className='text-zinc-900 text-2xl font-semibold'>Register</h2>

        <TextInput name='name'
          placeholder='Enter your name'
          {...form.getInputProps('name')} />

        <TextInput name='email'
          placeholder='Enter your email'
          {...form.getInputProps('email')} />

        <PasswordInput name='password'
          placeholder='Enter your password'
          {...form.getInputProps('password')} />

        <PasswordInput name='password_confirmation'
          placeholder='Confirm your password'
          {...form.getInputProps('password_confirmation')} />

        <div className="flex gap-7">
          <p className='select-none text-zinc-800'>Already have an account?</p>
          <Link to={'/login'}>
            <p className='cursor-pointer underline select-none text-zinc-800'>Login</p>
          </Link>
        </div>

        <button
          disabled={isLoading && true}
          type="submit"
          className='px-5 py-2 bg-zinc-900 text-white rounded'>
          {isLoading ? (<Loader className='mx-auto block' />) : "Sign In"}
        </button>
      </form>
    </div>
  )
}

export default Register

 // Before using mantine use-form

  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  // const [password_confirmation, setPasswordConfirmation] = useState("")

  // Submit event handler
  // const registerHandler = async (event) => {
  //   try {
  //     event.preventDefault()
  //     const user = { name, email, password, password_confirmation }
  //     const {data} = await register(user) // returns Promise object
  //     //console.log(data.data)

  //     if (data?.success === true) {
  //       navigate('/login')
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }