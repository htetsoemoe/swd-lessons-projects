import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useGetEditBlogMutation, useGetSingleBlogQuery } from '../feature/services/blogApi'

const Edit = () => {
    const {id} = useParams()

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [image, setImage] = useState("")

    // get editBlog function from rtk query
    const [getEditBlog] = useGetEditBlogMutation()

    // get blog using path variable 'id'
    const {data : blog} = useGetSingleBlogQuery(id)

    // navigate to home after update the blog content
    const navigate = useNavigate()

    // set blog default value in input fields after rendered this component using useEffect
    useEffect(() => {
        setTitle(blog?.title)
        setDesc(blog?.desc)
        setImage(blog?.image)
    }, [blog])
    
    const editBlogHandler = (event) => {
        event.preventDefault()
        const editBlog = {id, title, desc, image}
        getEditBlog(editBlog)
        navigate('/')
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <form onSubmit={editBlogHandler} className='flex flex-col w-96 gap-10 p-7 shadow-lg'>

                <h2 className="text-2xl font-semibold text-zinc-900">Edit Blog</h2>

                <input
                    defaultValue={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder='Title...'
                    type="text" className='outline-none border-b border-b-zinc-900' />

                <input
                    defaultValue={desc}
                    onChange={e => setDesc(e.target.value)}
                    placeholder='Description...'
                    type="text" className='outline-none border-b border-b-zinc-900' />

                <input
                    defaultValue={image}
                    onChange={e => setImage(e.target.value)}
                    placeholder='Image...'
                    type="text" className='outline-none border-b border-b-zinc-900' />

                <div className="flex gap-5">
                    <button className='py-2 px-5 bg-zinc-900 text-white rounded' type="submit">Update</button>
                    <Link to={'/'}>
                        <button className='py-2 px-5 bg-zinc-900 text-white rounded'>Home</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Edit
