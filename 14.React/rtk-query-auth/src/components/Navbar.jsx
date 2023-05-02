import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLogoutMutation } from '../redux/api/authApi';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { removeUserCookie } from '../redux/services/authSlice';

const Navbar = () => {
  /* Before using js-cookie, get state from rtk slice
  const { user } = useSelector(state => state.authSlice)
  const { token } = useSelector(state => state.authSlice) 
  */

  // using js-cookie, for reloading page
  const user = JSON.parse(Cookies.get("user"))
  const token = Cookies.get("token")
  
  const dispatch = useDispatch()
  const [logout] = useLogoutMutation()
  const navigate = useNavigate()

  const logoutHandler = async () => {
    const { data } = await logout(token)
    dispatch(removeUserCookie())

    if (data?.success) {
      navigate('/login')
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
