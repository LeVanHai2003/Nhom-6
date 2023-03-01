
import {  createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalQuanlity: 0
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addItem:(state,action)=>{
            const newItem = action.payload;
            const existingItem = state.cartItems.find(
                (item) => item.id  ===  newItem.id
            );
            state.totalQuanlity ++
            if(!existingItem){
                state.cartItems.push({
                    id: newItem.id,
                    productName : newItem.productName,
                    imgUrl: newItem.imgUrl,
                    price: newItem.price,
                    quantily: 1,
                    totalPrice: newItem.price
                });
            }
            else{
                existingItem.quantily++
                existingItem.totalPrice = Number(existingItem.totalPrice)+ Number(newItem.price) 
            }

            state.totalAmount = state.cartItems.reduce((total,item)=>total+ 
            Number(item.price)* Number(item.quantily),0);
            

        },

        deleteItem:(state,action)=>{
            const id = action.payload
            const existingItem = state.cartItems.find(item => item.id === id)
            if(existingItem){
                state.cartItems = state.cartItems.filter(item => item.id !== id )
                state.totalQuanlity = state.totalQuanlity - existingItem.quantily
            }
            state.totalAmount = state.cartItems.reduce((total,item)=>total+ 
            Number(item.price)* Number(item.quantily),0);
        }

    },

});

export const cartAction = cartSlice.actions;

export default cartSlice.reducer;