import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetSingleBlogQuery } from '../feature/services/blogApi'

const Detail = () => {
    const {id} = useParams()
    const {data : blog} = useGetSingleBlogQuery(id)
    
    return (
        <div className='flex flex-wrap justify-center gap-10 mt-20'>
            <div className='flex flex-col w-72 p-7 border shadow'>
                <img className='m-w-[100px] h-[200px]' src={blog?.image} alt={blog?.title} />
                <div className='flex flex-col gap-3 mt-2'>
                    <h2 className="font-semibold">{blog?.title}</h2>
                    <p>{blog?.desc}</p>
                   <div className="flex gap-5">
                        <Link to={`/`}>
                            <button className="bg-zinc-700 text-white px-5 py-1 rounded">Home</button>
                        </Link>
                        <Link to={`/edit/${blog?.id}`}>
                            <button className="bg-purple-900 text-white px-5 py-1 rounded">Edit</button>                        
                        </Link>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Detail
