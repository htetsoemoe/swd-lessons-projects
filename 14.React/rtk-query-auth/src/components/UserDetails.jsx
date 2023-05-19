import Cookies from 'js-cookie'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetSingleContactQuery } from '../redux/api/contactApi'

const UserDetails = () => {
  const {id} = useParams()
  const token = Cookies.get("token")
  const {data} = useGetSingleContactQuery({id, token})
  console.log(data);

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="flex flex-col gap-5 p-8 shadow-2xl border-zinc-900">
        <img src={data?.contact?.photo === null ? "https://media.istockphoto.com/id/1210939712/vector/user-icon-people-icon-isolated-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=vKDH9j7PPMN-AiUX8vsKlmOonwx7wjqdKiLge7PX1ZQ="
          : data?.contact?.photo } width={"250px"} alt="" />
        <p> 
          <span className='font-bold'> Name : </span>{data?.contact?.name}
        </p>
        <p>
          <span className='font-bold'> Email : </span>{data?.contact?.email}
        </p>
        <p>
          <span className='font-bold'> Phone : </span>{data?.contact?.phone}
        </p>
        <p>
          <span className='font-bold'> Address : </span>{data?.contact?.address}
        </p>

        <Link to={'/'}>
          <button className="bg-zinc-900 px-5 py-1 text-white rounded">Home</button>
        </Link>
      </div>
    </div>
  )
}

export default UserDetails
