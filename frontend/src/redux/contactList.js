import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
  "list/fetchContacts",
  async () => {
    const response = await axios.get("http://localhost:3002/contactlist");
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  "list/deleteContact",
  async (id) => {
    const response = await axios.delete(`http://localhost:3002/contactlist/${id}`);
    return response.data;
  }
);

export const editContact = createAsyncThunk(
  "list/editContact",
  async ({ formData, id }) => {
    const response = await axios.put(`http://localhost:3002/contactlist/${id}`,formData);
    return response.data;
  }
);

export const addContact = createAsyncThunk(
  "list/addContact",
  async (formData) => {
    const response = await axios.post("http://localhost:3002/contactlist",formData);
    return response.data;
  }
);

const initialState = {
  contactList: [],
  formOpen: false,
  formUpdate : false,
  formID: "",
};

const contactListSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setFormOpen: (state, action) => {
      state.formOpen = action.payload;
    },
    setFormUpdate: (state, action) => {
      state.formUpdate = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        console.log("loading");
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contactList = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        console.log("rejected");
      })
      .addCase(deleteContact.pending, (state, action) => {
        console.log("loading");
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        let id = action.payload._id;
        let newContactList = state.contactList.filter(
          (contact) => id !== contact._id
        );
        state.contactList = newContactList;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        console.log("rejected");
      })
      .addCase(editContact.fulfilled, (state, action) => {
        const updatedContact = action.meta.arg.formData; 
        const id = action.meta.arg.id;
        const index = state.contactList.findIndex(contact => contact._id === id);
        if (index !== -1) {
          state.contactList[index] = updatedContact;
        }
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contactList.push(action.payload);
      })
    
  },
});

export default contactListSlice.reducer;
export const { setFormOpen ,setFormUpdate } = contactListSlice.actions;
