import { Loader } from '@mantine/core';
import React from 'react'

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <Loader variant="bars" />
        </div>
    )
}

export default Loading
