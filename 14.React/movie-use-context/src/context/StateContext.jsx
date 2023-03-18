import { createContext } from "react";

export const StateContext = createContext();

export const StateContextProvider = ({children}) => {
    const userName = "John Doe"
    const data = {userName}

    return (
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
}