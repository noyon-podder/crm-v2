
import { api } from '../../api/apiSlice';

const calenderApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getCalenderEventData: builder.query({
            query: () => '',
            providesTags: ['calender'],
        }),
        postCalenderEvent: builder.mutation({
            query: (data) => ({
                url: '/postApi',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['calender'],
        }),
    }),
});

export const {
    useGetCalenderEventDataQuery,
    usePostCalenderEventMutation
} = calenderApi;