import React from 'react'
import { Link } from 'react-router-dom'

const BlogsCard = ({ blog }) => {
    return (
        <div>
            <div className='flex flex-col w-72 p-7 border shadow'>
                <img className='m-w-[100px] h-[200px]' src={blog?.image} alt={blog?.title} />
                <div className='flex flex-col gap-3 mt-2'>
                    <h2 className="font-semibold">{blog?.title}</h2>
                    <p>{blog.desc}</p>
                    <Link to={`/detail/${blog?.id}`}>
                        <button className="bg-zinc-700 text-white px-5 py-1 rounded">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogsCard
