import {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const items = prevCart.find((item) => item.id === product.id);

            if(items) { 
                return prevCart.map((item) => 
                    item.id === product.id ? {...item, quantity : item.quantity +1} : item
                );
            }else{
                return [...prevCart, {...product, quantity : 1}];
            }
        });
    };

    const updateQuantity = (id, quantity) => {
        setCart((prevCart) => 
        prevCart.map((item) => 
        item.id === id ? {...item, quantity} : item));
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    }

    return(
        <CartContext.Provider value={{cart, addToCart, updateQuantity, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;