import { useContext } from "react";
import { createContext } from "react";

const initialState = {
    cartList: [], 
    total: 0
}

const CartContext = createContext(initialState);

export const CartProvider = ({children}) => {

    const value = {
        total: 500
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);

// export const useCart = () => {
//     const context = useContext(CartContext);
//     return context;
// }