import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { contactsReducer } from './contactsSlice';
import { filterReducer } from "./filterSlice";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'contacts',
    storage
}

const reducers = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);

