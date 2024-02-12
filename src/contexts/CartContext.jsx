import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingProduct = state.find(item => item.id === action.payload.id);
      if (existingProduct) {
        return state.map(item => (item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item));
      } else {
        // If the product is not in the cart, add it with quantity 1
        return [...state, { ...action.payload, quantity: 1 }];
      }
    case 'UPDATE_QUANTITY':
      const { id, quantity } = action.payload;
      return state.map(item => (item.id === id ? { ...item, quantity: quantity } : item));

    case 'REMOVE_FROM_CART':
        return state.filter(item =>item.id !== action.payload.id);
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = product => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
  };

  const removeFromCart= (productId) => {
    dispatch({type:'REMOVE_FROM_CART', payload : {id: productId}})
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  return context;
};

export { CartProvider, useCart };
