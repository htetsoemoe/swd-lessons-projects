import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
    contacts: [],
    searchText: ""
};

export const contactSlice = createSlice({
    name: "contactSlice",
    initialState,
    reducers: {
        addContacts: (state, {payload}) => {
            state.contacts = payload
        }
    },
});

export const { addContacts } = contactSlice.actions;
export default contactSlice.reducer;