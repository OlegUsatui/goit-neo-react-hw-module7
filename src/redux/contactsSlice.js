import {createSlice} from '@reduxjs/toolkit';
import initialContacts from '../contacts.json';
import { fetchContacts, addContact, deleteContact } from "./contactsOps.js";


const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const slice = createSlice({
    name: 'contacts',
    initialState: {
        items: initialContacts,
        loading: false,
        error: null,
    },
    extraReducers: builder => {
        builder
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items.push({...action.payload.contact, id: action.payload.id });
            })
            .addCase(addContact.rejected, handleRejected);

        builder
            .addCase(fetchContacts.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, handleRejected);

        builder
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                const index = state.items.findIndex(
                    task => task.id === action.payload.id
                );
                state.items.splice(index, 1);
            })
            .addCase(deleteContact.rejected, handleRejected);
    },

});

// export const { addContact, deleteContact } = slice.actions;

export default slice.reducer;