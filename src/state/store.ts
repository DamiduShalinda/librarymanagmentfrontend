import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './login/loginSlice';
import loadingSlice from './login/loadingSlice';

const rootReducer = combineReducers({
    login : loginSlice,
    loading : loadingSlice
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['login']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer
});

export type LoginResponse = ReturnType<typeof loginSlice>;
export type LoadingState = ReturnType<typeof loadingSlice>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;