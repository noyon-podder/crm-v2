import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    addOpportunityData: []
}

const opportunitySlice = createSlice({
    name: "opportunity",
    initialState,
    reducers: {
        addToOpportunity: (state, action) => {
            state.addOpportunityData.push({ ...action.payload })
        },
    }
})

export const { addToOpportunity } = opportunitySlice.actions;

export default opportunitySlice.reducer;