import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      items: [], // Array to hold cart items
    },
    reducers: {
      addToCart: (state, action) => {
        // Add new product to the cart
        state.items.push(action.payload);
      },
      removeFromCart: (state, action) => {
        // Remove product by ID
        state.items = state.items.filter(item => item.id !== action.payload);
      },
      clearCart: (state) => {
        // Clear the cart
        state.items = [];
      },
      updateCartQuantity: (state,action) => {
        
        const {id,quantity} = action.payload
        state.items = state.items.map((item)=>(
          item.id === id ? {...item,quantity} : item
        ))
      },
    },
  });

  export const { addToCart, removeFromCart, clearCart,updateCartQuantity } = cartSlice.actions;

// Step 3: Configure the store
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;