import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/apiSlice';
import leadsReducer from './features/leads/leadsSlice';
import accountSlice from './features/account/accountSlice';
import contactSlice from './features/contact/contactSlice';
import opportunitySlice from './features/opportunity/opportunitySlice';
import reportSlice from './features/Report/reportSlice';
import quotesSlice from './features/quotes/quotesSlice';
import campaignSlice from './features/campaign/campaignSlice';
import taskSlice from './features/task/taskSlice';
import addToCalender from './features/calender/calenderSlice';
import dashboardSlice from './features/dashboard/dashboardSlice';

const store = configureStore({
    reducer: {
        leads: leadsReducer,
        account: accountSlice,
        contact: contactSlice,
        opportunity: opportunitySlice,
        report: reportSlice,
        quotes: quotesSlice,
        campaign: campaignSlice,
        task: taskSlice,
        calender: addToCalender,
        dashboard: dashboardSlice,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export default store;
