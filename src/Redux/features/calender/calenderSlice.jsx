import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    addClenderEventData: []
}

const calenderSlice = createSlice({
    name: "calender",
    initialState,
    reducers: {
        addToCalender: (state, action) => {
            state.addClenderEventData.push({ ...action.payload })
        },
    }
})

export const { addToCalender } = calenderSlice.actions;

export default calenderSlice.reducer;