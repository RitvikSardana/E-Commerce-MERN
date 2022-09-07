import  {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0, // No. of products in our cart
        total:0 
    },
    reducers :{
        //returns a new state
        addProduct :(state,action) =>{
            state.quantity += 1; //cart quantity number
            state.products.push(action.payload) //payload is our new product
            state.total += action.payload.price *action.payload.quantity ;
        }
    }
})
export const {addProduct} = cartSlice.actions;
export default cartSlice.reducer;