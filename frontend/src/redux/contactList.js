import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
  contactList: [],
};

// Define an async thunk for fetching contacts from the server
export const fetchContacts = createAsyncThunk('list/fetchContacts', async () => {
  const response = await axios.get('http://localhost:3002/contactlist');
  return response.data;
});


// Create a slice for managing the contact list
const contactListSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addToList : (state, action) => {
         state.contactList.push(action.payload);
        },
  }
});

export default contactListSlice.reducer;


// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const INITIAL_STATE = {
//    contactList: [],
// };

// const cartSlice = createSlice({
//    name: "cart",
//    initialState: INITIAL_STATE,
//    reducers: {
//       updateUser: (state, action) => {
//          state.userDetail.push(action.payload);
//       },
//       addToCart: (state, action) => {
//          const itemExist = state.cartList.find((item) => item.id === action.payload.id);
//          if (itemExist) {
//             state.cartList.forEach((item) => {
//                if (item?.id === action.payload.id) {
//                   item.count = 1;
//                }
//             });
//             return;
//          }
//          state.cartList.push({
//             ...action.payload,
//             count: 1,
//          });
//       },
//       increment: (state, action) => {
//          const productID = action.payload;
//          state.cartList.forEach((item) => {
//             if (item?.id === productID) {
//                item.count++;
//             }
//          });
//       },
//       decrement: (state, action) => {
//          const productID = action.payload;
//          state.cartList.forEach((item) => {
//             if (item?.id === productID) {
//                item.count--;
//             }
//          });
//       },
//    },
// });

// export const { increment, decrement, addToCart, updateUser } = cartSlice.actions;

// export default cartSlice.reducer;