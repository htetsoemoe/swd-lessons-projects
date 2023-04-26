import React from 'react'
import { useGetBlogsQuery } from '../feature/services/blogApi'
import BlogsCard from './BlogsCard';

const Blogs = () => {
    const {data : blogs} = useGetBlogsQuery()

    return (
        <div className='flex flex-wrap justify-center gap-10 mt-20'>
            {blogs?.map(blog => {
                return (
                    <BlogsCard key={blog.id} blog={blog}/>
                )
            })}
        </div>
    )
}

export default Blogs
