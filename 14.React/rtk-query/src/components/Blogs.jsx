import React from 'react'
import { useGetBlogsQuery } from '../feature/services/blogApi'
import BlogsCard from './BlogsCard';
import { Link } from 'react-router-dom';

const Blogs = () => {
    const { data: blogs } = useGetBlogsQuery()

    return (
        <>
            <Link to={'/create'}>
                <div className="flex justify-center mt-10">
                    <button className="bg-zinc-900 text-white px-5 py-1 rounded">Create Blog</button>
                </div>
            </Link>
            <div className='flex flex-wrap justify-center gap-10 mt-20'>
                {blogs?.map(blog => {
                    return (
                        <BlogsCard key={blog.id} blog={blog} />
                    )
                })}
            </div>
        </>
    )
}

export default Blogs
