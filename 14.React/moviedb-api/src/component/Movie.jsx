import React from 'react'
import { motion } from 'framer-motion'

const Movie = ({ title, poster_path }) => {
    return (
        <motion.div layout
        animate={{opacity:1, scale:1}}
        initial={{opacity:0.5, scale:0.5}}
        exit={{opacity:0.5, scale:0.5}}
        transition={{duration: 0.4}}
        className='max-w-2xl'>
            <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-800">
                <img className='rounded' src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="" />
                <div className="mt-5 mb-5 text-center">
                    <p className='text-sm font-bold tracking-tighter mb-3'>{title.substring(0, 20)}...</p>
                    <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Watch Movie
                        <svg class="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

export default Movie
