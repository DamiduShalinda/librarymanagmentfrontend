import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './login/loginSlice';

const rootReducer = combineReducers({
    login : loginSlice
});

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer
});

export type LoginResponse = ReturnType<typeof loginSlice>;
export type AppDispatch = typeof store.dispatch;