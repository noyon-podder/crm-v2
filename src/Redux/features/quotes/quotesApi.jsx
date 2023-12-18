import { api } from '../../api/apiSlice';

const quotesApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getQuotes: builder.query({
            query: () => '/fakeData/quotes/quotes.json',
            providesTags: ['quotes'],
        }),
    }),
});

export const {
    useGetQuotesQuery,
} = quotesApi;