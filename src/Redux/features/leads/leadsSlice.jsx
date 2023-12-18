import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    addLeadsData: []
}

const leadsSlice = createSlice({
    name: "leads",
    initialState,
    reducers: {
        addToLeads: (state, action) => {
            state.addLeadsData.push({...action.payload})
        },
    }
})

export const { addToLeads } = leadsSlice.actions;

export default leadsSlice.reducer;