import { createSlice } from "@reduxjs/toolkit";
import initialContacts from '../data/contacts.json';
import { nanoid } from "nanoid";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialContacts,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        name, 
                        number,
                        id: nanoid(),
                    }
                }
            }
        },
        deleteContact(state, action) {
            return state.filter(contact => contact.id !== action.payload)
        }
    }
})

export const {addContact, deleteContact} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;