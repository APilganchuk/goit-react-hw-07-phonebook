// import { createStore } from 'redux';
import {
  configureStore,

  // combineReducers,
} from '@reduxjs/toolkit';

// import storage from 'redux-persist/lib/storage';

import { items, filter, loading, error } from './contacts-reducer';

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

// const rootReducer = combineReducers({ items, filter });
// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: { items, filter, loading, error },

  devTools: process.env.NODE_ENV === 'development',
});

// export const persistore = persistStore(store);

export default store;
