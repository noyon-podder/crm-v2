import { api } from '../../api/apiSlice';

const campaignApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getCampaign: builder.query({
            query: () => '/fakeData/campaign/campaign.json',
            providesTags: ['campaign'],
        }),
        postCampaign: builder.mutation({
            query: (data) => ({
                url: '/postApi',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['campaign'],
        }),
    }),
});

export const {
    useGetCampaignQuery,
    usePostCampaignMutation
} = campaignApi;