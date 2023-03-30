import React from 'react'

const Filter = ({ filtered, setFiltered }) => {
    return (
        <div className='flex justify-around shadow rounded p-10 items-center'>
            <h1 className='font-semibold text-2xl'>TT Movie Store</h1>
            <div className="flex gap-5">
                <button className='px-7 py-3 bg-cyan-950 text-white rounded'>All</button>
                <button className='px-7 py-3 bg-cyan-950 text-white rounded'>Action</button>
                <button className='px-7 py-3 bg-cyan-950 text-white rounded'>Comedy</button>
            </div>
        </div>
    )
}

export default Filter
