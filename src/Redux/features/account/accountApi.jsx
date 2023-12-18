
import { api } from '../../api/apiSlice';

const accountApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAccounts: builder.query({
            query: () => '/fakeData/account/account.json',
            providesTags: ['account'],
        }),
        postAccounts: builder.mutation({
            query: (data) => ({
                url: '/postApi',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['account'],
        }),
    }),
});

export const {
    useGetAccountsQuery,
    usePostAccountsMutation
} = accountApi;