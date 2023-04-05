import React, { useEffect } from 'react'

const ComponentA = () => {

    const changeLog = e => {
        console.log("X : " + e.clientX);
        console.log("Y : " + e.clientY);
    }

    useEffect(() => {
        window.addEventListener("mousemove", changeLog)

        /** if ComponentA was removed  componentWillUnmount will called*/
        return () => {
            window.removeEventListener("mousemove", changeLog)
        }
    }, [])

    return (
        <div>
            Component A
        </div>
    )
}

export default ComponentA
