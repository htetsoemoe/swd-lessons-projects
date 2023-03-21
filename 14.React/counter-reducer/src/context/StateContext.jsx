import { createContext } from "react";

export const StateContext = createContext() 

export const StateContextProvider = ({children}) => {

    return (
        <StateContext.Provider>
            {children}
        </StateContext.Provider>
    )
}