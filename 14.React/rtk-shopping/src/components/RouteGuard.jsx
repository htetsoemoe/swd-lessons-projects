import React from 'react'
import { Navigate, useLocation } from 'react-router'

const RouteGuard = ({ children }) => {
    const location = useLocation()
    console.log(location);

    // If user typing 'search keyword' in search input box, state will include
    if (location?.state != null) {
        return children
    } else {
       return <Navigate to={'/'}/> 
    }

}

export default RouteGuard
