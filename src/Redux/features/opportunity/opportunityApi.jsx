
import { api } from '../../api/apiSlice';

const opportunityApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getOpportunity: builder.query({
            query: () => '/fakeData/opportunity/opportunity.json',
            providesTags: ['opportunity'],
        }),
        postopportunity: builder.mutation({
            query: (data) => ({
                url: '/postApi',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['opportunity'],
        }),
    }),
});

export const {
    useGetOpportunityQuery,
    usePostopportunityMutation
} = opportunityApi;