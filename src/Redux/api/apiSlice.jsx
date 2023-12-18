import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  tagTypes: ['leads', 'account', 'contact', 'opportunity', 'calender', 'forecast', 'report', 'quotes', 'campaign', 'task', 'dashboard'],
  endpoints: () => ({}),
});
