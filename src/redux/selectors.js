// src/redux/selectors.js
export const getContacts = state => state.contacts.contacts;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

// Selector for retrieving the current filter value
export const getFilter = state => state.filter.value;