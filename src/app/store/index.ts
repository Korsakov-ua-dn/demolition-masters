import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { popupsReducer } from 'features/popup';

const rootReducer = combineReducers({
  popups: popupsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
