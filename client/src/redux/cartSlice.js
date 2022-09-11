import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0, // No. of products in our cart
    total: 0,
  },
  reducers: {
    //returns a new state
    addProduct: (state, action) => {
      state.quantity += 1; //cart quantity number
      state.products.push(action.payload); //payload is our new product
      state.total += action.payload.price * action.payload.quantity;
    },
    emptyCart: (state) => {
      state.quantity = 0;
      state.products = [];
      state.total = 0;
    },
    increaseQuantity: (state, action) => {
        console.log()
      state.products.find(
        (product) => product._id === action.payload._id
      ).quantity += 1;
      state.total =  Number(state.total) + Number(action.payload.price)
    },
    decreaseQuantity: (state, action) => {
      state.products.find(
        (product) => product._id === action.payload._id
      ).quantity -= 1;
      state.total =  Number(state.total) - Number(action.payload.price)
    },
  },
});

export const { addProduct, emptyCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
