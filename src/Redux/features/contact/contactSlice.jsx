import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    addContactData: []
}

const accountSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        addToContact: (state, action) => {
            state.addContactData.push({ ...action.payload })
        },
    }
})

export const { addToContact } = accountSlice.actions;

export default accountSlice.reducer;