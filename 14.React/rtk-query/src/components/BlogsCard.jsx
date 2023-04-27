import React from 'react'
import { Link } from 'react-router-dom'
import { useGetDeleteBlogMutation } from '../feature/services/blogApi'

const BlogsCard = ({ blog }) => {
    // Delete method from rtk query
    const [getDeleteBlog] = useGetDeleteBlogMutation()

    return (
        <div>
            <div className='flex flex-col w-72 p-7 border shadow'>
                <img className='m-w-[100px] h-[200px]' src={blog?.image} alt={blog?.title} />
                <div className='flex flex-col gap-3 mt-2'>
                    <h2 className="font-semibold">{blog?.title}</h2>
                    <p>{blog?.desc}</p>
                    <div className="flex gap-5">
                        <Link to={`/detail/${blog?.id}`}>
                            <button className="bg-zinc-900 text-white px-5 py-1 rounded">Details</button>
                        </Link>
                        <button onClick={() => getDeleteBlog(blog?.id)} className="bg-red-900 text-white px-5 py-1 rounded">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogsCard
