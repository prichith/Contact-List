import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk('list/fetchContacts', async () => {
  const response = await axios.get('http://localhost:3002/contactlist');
  return response.data;
});

export const deleteContact = createAsyncThunk('list/deleteContact', async (id) => {
  console.log(id,'==delete contact id');
  const response = await axios.delete(`http://localhost:3002/contactlist/${id}`);
  console.log(response.data._id);
  return response.data;
});

const initialState = {
  contactList: [],
  formOpen : false,
  formID : ""
};


const contactListSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addToList : (state, action) => {
        //  state.contactList.push(action.payload);
        },
    setFormOpen: (state) => {
      state.formOpen = true;
      console.log(initialState,'== initial state');
    }
      },
    extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        console.log('loading');
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contactList = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        console.log('rejected');
      })
      .addCase(deleteContact.pending, (state, action) => {
        console.log('loading');
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        console.log(action,'== action');
        let id = action.payload._id;
        let newContactList = state.contactList.filter((contact)=> id!== contact._id);
        state.contactList = newContactList;
        console.log(newContactList,'== contact list ');
      })
      .addCase(deleteContact.rejected, (state, action) => {
        console.log('rejected');
      })
  }
});

export default contactListSlice.reducer;
export const { setFormOpen } = contactListSlice.actions;

