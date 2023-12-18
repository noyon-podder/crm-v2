import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    addRecentDashboardData: [],
    addNewDashboardData: []
}

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        addToRecentDashboard: (state, action) => {
            state.addRecentDashboardData.push({...action.payload})
        },
        addToNewDashboard: (state, action) => {
            state.addNewDashboardData.push({...action.payload})
        },
    }
})

export const { addToRecentDashboard, addToNewDashboard } = dashboardSlice.actions;

export default dashboardSlice.reducer;