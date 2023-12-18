import { api } from '../../api/apiSlice';

const reportApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getReport: builder.query({
            query: () => '/fakeData/report/report.json',
            providesTags: ['report'],
        }),
    }),
});

export const {
    useGetReportQuery,
} = reportApi;