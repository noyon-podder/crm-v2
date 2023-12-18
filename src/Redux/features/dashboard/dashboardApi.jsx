
import { api } from '../../api/apiSlice';

const dashboardApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getRecentAddDashboard: builder.query({
            query: () => '',
            providesTags: ['dashboard'],
        }),
        getNewAddDashboard: builder.query({
            query: () => '',
            providesTags: ['dashboard'],
        }),
        postRecentAddDashboard: builder.mutation({
            query: (data) => ({
                url: '/postApi',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['dashboard'],
        }),
        postNewAddDashboard: builder.mutation({
            query: (data) => ({
                url: '/postApi',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['dashboard'],
        }),
    }),
});

export const {
    useGetRecentAddDashboardQuery,
    useGetNewAddDashboardQuery,
    usePostRecentAddDashboardMutation,
    usePostNewAddDashboardMutation
} = dashboardApi;