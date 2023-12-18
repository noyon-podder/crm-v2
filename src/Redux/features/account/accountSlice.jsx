import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    addAcountData: []
}

const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        addToAccount: (state, action) => {
            state.addAcountData.push({...action.payload})
        },
    }
})

export const { addToAccount } = accountSlice.actions;

export default accountSlice.reducer;