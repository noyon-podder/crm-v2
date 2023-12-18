
import { api } from '../../api/apiSlice';

const contactApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getContact: builder.query({
            query: () => '/fakeData/contact/contact.json',
            providesTags: ['contact'],
        }),
        postContact: builder.mutation({
            query: (data) => ({
                url: '/postApi',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['contact'],
        }),
    }),
});

export const {
    useGetContactQuery,
    usePostContactMutation
} = contactApi;