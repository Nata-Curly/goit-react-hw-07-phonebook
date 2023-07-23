import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, DeleteContact } from './operations';

const handlePending = state => {
    state.loading = true;
};

const handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
};

const handleFetchFulfilled = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.items = action.payload;
};

const handleAddContactFulfilled = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.items.push(action.payload);
};

const handleDeleteContactFulfilled = (state, action) => {
    state.isLoading = false;
    state.error = null;
    const index = state.items.findIndex(
        contact => contact.id === action.payload.id);
      state.items.splice(index, 1);
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },

    extraReducers: builder => builder.addCase(fetchContacts.pending, handlePending).addCase(fetchContacts.fulfilled, handleFetchFulfilled).addCase(fetchContacts.rejected, handleRejected).addCase(addContact.pending, handlePending).addCase(addContact.fulfilled, handleAddContactFulfilled).addCase(addContact.rejected, handleRejected).addCase(DeleteContact.pending, handlePending).addCase(DeleteContact.fulfilled, handleDeleteContactFulfilled).addCase(DeleteContact.rejected, handleRejected),
});

export const contactsReducer = contactsSlice.reducer;

