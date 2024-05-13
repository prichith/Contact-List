import { configureStore } from '@reduxjs/toolkit';
import contactList from './contactList';

const store = configureStore({
  reducer: {
    list: contactList,
  },
});

export default store;
