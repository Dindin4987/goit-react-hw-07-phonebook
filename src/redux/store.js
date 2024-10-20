// store.js
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { contactsReducer } from '../redux/reducers';
// import { filterReducer } from '../redux/reducers';
import { contactsSlice } from '../redux/contactsSlice';
import { filterSlice } from '../redux/filterSlice';
import { configureStore } from '@reduxjs/toolkit';

// Combine reducers
// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// Create a store extension to add developer tools
// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);

export const store = configureStore({
  reducer: {
    // contacts: contactsReducer,
    // filter: filterReducer,
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
  // The middleware and devTools enhancer are automatically included by default, so you don't need to specify them.
});