import React from 'react'

const card = ({ product }) => {
    return (
        <div className='card px-3 py-3 my-4 bg-light' key={product.id} style={{ width: "18rem" }}>
            <div className="card-body">

                <img src={product.image} height="100px" alt="" />

                <h4 className="card-title text-truncate">
                    {product.title}
                </h4>

                <p className="card-text text-truncate text-sm-start">
                    {product.description}
                </p>

                <button className="btn btn-primary">Add to Cart</button>
            </div>
        </div>
    )
}

export default card