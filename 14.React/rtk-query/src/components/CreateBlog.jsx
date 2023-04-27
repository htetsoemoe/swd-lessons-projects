import React, { useState } from 'react'
import { useGetCreateBlogMutation } from '../feature/services/blogApi'
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [image, setImage] = useState("")

    // use mutation reducer from rtk query
    const [getCreateBlog] = useGetCreateBlogMutation()

    // when new blog was created, we need to navigate to / route
    const navigate = useNavigate()

    // Submit event handler
    const createBlogHandler = (event) => {
        event.preventDefault()
        console.log(title, image, desc);
        const newBlog = {id: Date.now(), title, image, desc}
        getCreateBlog(newBlog)
        navigate("/")
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <form onSubmit={createBlogHandler} className='flex flex-col w-96 gap-10 p-7 shadow-lg'>
                
                <h2 className="text-2xl font-semibold text-zinc-900">Create Blog</h2>
                
                <input 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder='Title...'
                    type="text" className='outline-none border-b border-b-zinc-900' />
                
                <input 
                    value={desc}
                    onChange={e => setDesc(e.target.value)}
                    placeholder='Description...'
                    type="text" className='outline-none border-b border-b-zinc-900' />
                
                <input 
                    value={image}
                    onChange={e => setImage(e.target.value)}
                    placeholder='Image...'
                    type="text" className='outline-none border-b border-b-zinc-900'/>

                <button className='py-3 px-1 bg-zinc-900 text-white rounded' type="submit">Create</button>
            </form>
        </div>
    )
}

export default CreateBlog
