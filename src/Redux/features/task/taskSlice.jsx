import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    addTaskData: []
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addToTask: (state, action) => {
            state.addTaskData.push({ ...action.payload })
        },
    }
})

export const { addToTask } = taskSlice.actions;

export default taskSlice.reducer;