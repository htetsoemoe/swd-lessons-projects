import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const StateContext = createContext() 

export const StateContextProvider = ({children}) => {

    const [count, setCount] = useState(0)
    const data = {count, setCount}

    return (
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
}