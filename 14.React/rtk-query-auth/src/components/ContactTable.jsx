import React, { useEffect } from 'react'
import { Table } from '@mantine/core';
import { useDeleteContactMutation, useGetContactsQuery } from '../redux/api/contactApi'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom';
import { TextInput } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts, setSearchTerm } from '../redux/services/contactSlice';
import Swal from 'sweetalert2'

const ContactTable = () => {
    // Get login user token from Cookie
    const token = Cookies.get("token")

    // query all contacts from server using 'getContact' api
    const { data, isLoading } = useGetContactsQuery(token)
    console.log(data);

    // delete specified contact with id
    const [deleteContact] = useDeleteContactMutation();

    const dispatch = useDispatch()
    const contacts = useSelector(state => (state.contactSlice.contacts))
    const searchTerm = useSelector(state => state.contactSlice.searchText)

    useEffect(() => {
        dispatch(addContacts(data?.contacts?.data))
    }, [data])

    // delete contact with sweetalert2 confirm box and deleteContact mutation from authApi
    const deleteHandler = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                const data = await deleteContact({ id, token })// token is default value
                //console.log(data);
            }
        })
        
    }

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h2 className='text-3xl font-semibold'>Loading...</h2>
            </div>
        )
    }

    const rows = contacts?.filter(contact => {
        if (searchTerm === "") {
            return contact
        } else if (contact?.name.toLowerCase().includes(searchTerm?.toLowerCase())) {
            return contact
        }
    }).map(contact => {
        return (
            <tr key={contact?.id}>
                <td>{contact?.name}</td>
                <td>{contact?.email === null ? 'example@gmail.com' : contact?.email}</td>
                <td>{contact?.phone}</td>
                <td>{contact?.address === null ? 'Mandalay, Myanmar.' : contact?.address}</td>
                <td>
                    <button onClick={() => deleteHandler(contact?.id)} className='my-3 mx-14 bg-red-800 text-white px-7 py-1 rounded'>
                        Delete
                    </button>
                </td>
            </tr>
        )
    })

    return (
        <>
            <div className="flex items-center">
                <Link to={'/create'}>
                    <button className='my-5 mx-14 bg-zinc-950 text-white px-7 py-1 rounded'>Create Contact</button>
                </Link>

                <TextInput
                    variant="filled"
                    placeholder="Search Contact"
                    value={searchTerm}
                    onChange={event => dispatch(setSearchTerm(event.target.value))}
                />
            </div>

            <div className='container mx-auto md:container mt-5'>
                <Table className='w-[95%] mx-auto'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default ContactTable
