import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { popupsReducer } from 'features/popup';
import { menuReducer } from 'features/menu';

const rootReducer = combineReducers({
  popups: popupsReducer,
  menu: menuReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
