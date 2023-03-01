import React, { useState } from 'react'

const Button = () => {
    const [state, setState] =useState(false);

    return (
        <button onClick={() => setState(!state)}
            className={`btn ${state ? "btn-danger" : "btn-primary"}`}>
            {state ? "Remove From Cart" : "Add To Cart"}
        </button>
    )
}

export default Button
