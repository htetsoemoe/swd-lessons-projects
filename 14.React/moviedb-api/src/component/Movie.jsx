import React from 'react'
import { motion } from 'framer-motion'

const Movie = ({ title, poster_path }) => {
    return (
        <motion.div layout
        animate={{opacity:1, scale:1}}
        initial={{opacity:0.5, scale:0.5}}
        exit={{opacity:0.5, scale:0.5}}
        transition={{duration: 0.4}}
        className=''>
            <p className='text-xs font-bold mb-3'>{title}</p>
            <img className='rounded' src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="" />
        </motion.div>
    )
}

export default Movie
