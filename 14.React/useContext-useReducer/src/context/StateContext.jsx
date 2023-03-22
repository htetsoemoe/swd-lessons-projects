import { createContext, useContext, useReducer } from "react";

const StateContext = createContext()

export const StateContextProvider = ({children}) => {
    const initialState = {
        count: 0,
        value: 10
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "increaseCount":
                return { ...state, count: state.count + 1 }
            case "increaseValue":
                return { ...state, value: state.value + 10 }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    // This object is a value of Context Provider Container
    const data = {state, dispatch}

    return (
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
}

export const StateContextCustom = () => useContext(StateContext)