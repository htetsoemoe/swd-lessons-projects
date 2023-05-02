import React from 'react'
import { useSelector } from 'react-redux';
import { useLogoutMutation } from '../redux/api/authApi';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { user } = useSelector(state => state.authSlice)
  const { token } = useSelector(state => state.authSlice)
  
  const [logout] = useLogoutMutation()
  const navigate = useNavigate()

  const logoutHandler = async () => {
    try {
      const { data } = await logout(token)
      //console.log(data);
      if (data?.success) {
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex justify-around p-5 shadow items-center'>
      <h2 className='text-2xl text-zinc-950 font-semibold'>Coding Ninja</h2>
      <div className="flex gap-10 items-center">
        <div className="flex flex-col gap-3">
          <p>{user?.name}</p>
          <p>{user?.email}</p>
        </div>
        <button onClick={logoutHandler} className="bg-red-900 text-white px-4 py-1 rounded">Logout</button>
      </div>
    </div>
  )
}

export default Navbar
