import { configureStore,combineReducers } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import productReducer from './productSlice'
import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer = combineReducers({user:userReducer,product:productReducer})

//reducer which we want to persist
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    //all reducers here
  reducer:persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)