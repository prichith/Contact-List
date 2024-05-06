import { configureStore } from '@reduxjs/toolkit';
import contactReducer from '../features/contactsSlice';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});

export default store;
