import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://64bc2c2e7b33a35a44471974.mockapi.io/api/phonebook';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const resp = await axios.get('/contacts');
            return resp.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        };
    },
);


export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkAPI) => {
        try {
            const resp = await axios.post('/contacts', { ...contact });
            return resp.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        };
    },
);

export const DeleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            const resp = await axios.delete(`/contacts/${contactId}`);
            return resp.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        };
    },

);
