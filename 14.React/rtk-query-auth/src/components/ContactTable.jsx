import React from 'react'
import { Table } from '@mantine/core';
import { useGetContactsQuery } from '../redux/api/contactApi'
import Cookies from 'js-cookie'

const ContactTable = () => {
    // Get login user token from Cookie
    const token = Cookies.get("token")

    // query all contacts from server using 'getContact' api
    const { data, isLoading } = useGetContactsQuery(token);
    console.log(data?.contacts?.data);

    if (isLoading) {
        return(
            <div className="flex justify-center items-center h-screen">
                <h2 className='text-3xl font-semibold'>Loading...</h2>
            </div>
        )
    }

    return (
        <div className='container mx-auto md:container mt-10'>
            <Table className='w-[95%] mx-auto'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.contacts?.data.map(contact => {
                        return (
                            <tr key={contact?.id}>
                                <td>{contact?.name}</td>
                                <td>{contact?.email === null ? 'example@gmail.com' : contact?.email}</td>
                                <td>{contact?.phone}</td>
                                <td>{contact?.address === null ? 'Mandalay, Myanmar.' : contact?.address}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default ContactTable
