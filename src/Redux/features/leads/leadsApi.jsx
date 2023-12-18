
import { api } from '../../api/apiSlice';

const leadsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getLeads: builder.query({
            query: () => '/fakeData/leads/leads.json',
            providesTags: ['leads'],
        }),
        postLeads: builder.mutation({
            query: (data) => ({
                url: '/postApi',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['leads'],
        }),
    }),
});

export const {
    useGetLeadsQuery,
    usePostLeadsMutation
} = leadsApi;