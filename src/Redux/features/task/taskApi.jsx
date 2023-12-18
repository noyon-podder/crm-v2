import { api } from '../../api/apiSlice';

const taskApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getTask: builder.query({
            query: () => '/fakeData/task/task.json',
            providesTags: ['task'],
        }),
        postTask: builder.mutation({
            query: (data) => ({
                url: '/postApi',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['task'],
        }),
    }),
});

export const {
    useGetTaskQuery,
    usePostTaskMutation
} = taskApi;