import { filterReducer } from './filter/filterSlice';
import { contactsReducer } from './contacts/contactsSlice';
import { combineReducers } from '@reduxjs/toolkit';

export const reducer = combineReducers({
  filter: filterReducer,
  contacts: contactsReducer,
});