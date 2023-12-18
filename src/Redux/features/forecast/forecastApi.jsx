
import { api } from '../../api/apiSlice';

const forecastApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getForecastData: builder.query({
            query: () => '/fakeData/forecast/forecast.json',
            providesTags: ['forecast'],
        }),
        // postForecastData: builder.mutation({
        //     query: (data) => ({
        //         url: '/postApi',
        //         method: 'POST',
        //         body: data,
        //     }),
        //     invalidatesTags: ['forecast'],
        // }),
    }),
});

export const {
    useGetForecastDataQuery,
    // usePostForecastDataMutation
} = forecastApi;