import { createContext, useState } from "react";

export const StateContext = createContext();

export const StateContextProvider = ({children}) => {

    const [movieList, setMovieList] = useState([
        { id: 1, name: "3 Idiots", rating: "7.5" },
        { id: 2, name: "Me Before You", rating: "5.5" },
        { id: 3, name: "Green Miles", rating: "8.5" },
        { id: 4, name: "The Ghazi Attack", rating: "6.5" },
        { id: 5, name: "12 Strong", rating: "7.8" },
    ])

    const userName = "John Doe"
    const data = {movieList, setMovieList}

    return (
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
}