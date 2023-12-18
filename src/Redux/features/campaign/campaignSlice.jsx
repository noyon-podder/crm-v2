import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    addAllCampaignData: []
}

const campaignSlice = createSlice({
    name: "campaign",
    initialState,
    reducers: {
        addToAllCampaign: (state, action) => {
            state.addAllCampaignData.push({ ...action.payload })
        },
    }
})

export const { addToAllCampaign } = campaignSlice.actions;

export default campaignSlice.reducer;