import React from 'react'

const Card = () => {
    return (
        <div className='max-w-sm rounded bg-slate-200 shadow-lg'>
            <img className='w-full' src="https://global.honda/products/assets/motorcycles/img/img-models08.jpg" alt="" />

            <div className="px-6 py-6">
                <div className="font-bold text-xl mb-3">Custom Motor Bike</div>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur error quo dolorum nisi minima itaque doloremque nulla, voluptas possimus quasi, debitis dolorem impedit quibusdam. Unde molestias earum numquam vel, quas alias provident assumenda voluptatum nam quo corrupti enim voluptate error animi aut debitis sequi. Esse magnam optio tempora voluptatibus ducimus?
                </p>
            </div>

            <div className="px-6 pt-4 pb-4">
                <span className="inline-block px-3 py-1 bg-blue-700 rounded-full mr-3 mb-3">#SuperCub250</span>
                <span className="inline-block px-3 py-1 bg-blue-700 rounded-full mr-3 mb-3">#CustomBike</span>
                <span className="inline-block px-3 py-1 bg-blue-700 rounded-full mb-3">#Honda</span>
            </div>
        </div>
    )
}

export default Card
