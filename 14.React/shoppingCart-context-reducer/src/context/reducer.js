export const reducer = (state, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {...state, products: action.payload}
        case "ADD_TO_CART":
            const isExisted = state.cart.find(product => product.id === action.payload.id)
            if (isExisted) {
                return state
            } else {
                return {...state, cart: [...state.cart, {...action.payload}]}           
            }
        default:
            return state
    }
}