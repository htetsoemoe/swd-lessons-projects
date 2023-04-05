import React, { useState } from 'react'
import ComponentA from './ComponentA'

const Parent = () => {

    const [isShow, setIsShow] = useState(true)

    const toggleHandler = () => {
        setIsShow(!isShow)
    }

    return (
        <div>
            <h1>{isShow && <ComponentA />}</h1>
            <button onClick={toggleHandler}>{isShow ? "Hide" : "Show"}</button>
        </div>
    )
}

export default Parent
