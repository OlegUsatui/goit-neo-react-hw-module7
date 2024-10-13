import {createSelector} from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;
export const selectNameFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (list, filterName) => list.filter(contact =>
        contact.name.toLowerCase().includes(filterName.toLowerCase())
    )
);

