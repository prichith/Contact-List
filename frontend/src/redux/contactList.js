import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { notify } from "../App";

const initialState = {
  contactList: [],
  formOpen: false,
  formUpdate: false,
  totalContact: 0,
  contactLimit: 5,
  searchText: undefined,
  contactsPerPage: 5,
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
    },
    setContactLimit: (state, action) => {
      state.contactLimit = action.payload;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setContactsPerPage: (state, action) => {
      state.contactsPerPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        console.log("loading");
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contactList = action.payload.data ? action.payload.data : "";
        state.totalContact = action.payload.totalEmployee;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        console.log("rejected");
      })
      .addCase(deleteContact.pending, (state, action) => {
        console.log("loading");
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        notify("Employee Deleted Successfully");
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
        notify("Employee Updated Successfully");
        const updatedContact = action.meta.arg.formData;
        const id = action.meta.arg.id;
        const index = state.contactList.findIndex(
          (contact) => contact._id === id
        );
        if (index !== -1) {
          state.contactList[index] = updatedContact;
        }
      })
      .addCase(addContact.fulfilled, (state, action) => {
        notify("Employee Added Successfully");
        if (state.contactList.length !== state.contactLimit) {
          state.contactList.unshift(action.payload);
        } else {
          state.contactList.unshift(action.payload);
          state.contactList.pop();
        }
      });
  },
});

export const fetchContacts = createAsyncThunk(
  "list/fetchContacts",
  async ({ page, limit, search }) => {
    const response = await axios.get(
      `http://localhost:3002/contactlist/${page}/${limit}/${search}`
    );
    const data = response.data.data || [];
    const totalEmployee = response.data.totalEmployee;
    return { data, totalEmployee, limit: data.length };
  }
);

export const deleteContact = createAsyncThunk(
  "list/deleteContact",
  async (id) => {
    const response = await axios.delete(
      `http://localhost:3002/contactlist/${id}`
    );
    return response.data;
  }
);

export const editContact = createAsyncThunk(
  "list/editContact",
  async ({ formData, id }) => {
    const response = await axios.put(
      `http://localhost:3002/contactlist/${id}`,
      formData
    );
    return response.data;
  }
);

export const addContact = createAsyncThunk(
  "list/addContact",
  async (formData) => {
    const response = await axios.post(
      "http://localhost:3002/contactlist",
      formData
    );
    return response.data;
  }
);

export default contactListSlice.reducer;
export const {
  setFormOpen,
  setFormUpdate,
  setContactLimit,
  setSearchText,
  setContactsPerPage,
} = contactListSlice.actions;
