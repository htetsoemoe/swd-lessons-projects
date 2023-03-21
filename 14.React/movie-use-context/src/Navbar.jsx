import React, { useContext } from 'react'
import { StateContext } from './context/StateContext'

const Navbar = () => {
    const { movieList, setmovieList } = useContext(StateContext)

    return (
        <div style={{ display: "flex", justifyContent: "space-around",
            backgroundColor: "rgb(18, 135, 135)", color: "#fff" }}>
            <h2>Movie Store</h2>

            <h2>Movie List : {movieList.length}</h2>
        </div>
    )
}

export default Navbar
