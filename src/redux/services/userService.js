import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
  reducerPath: 'userService',
  refetchOnFocus: true, // when the window is refocused, refetch the data
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://casa-llena.onrender.com/',
  }),
  endpoints: (builder) => ({
    singIn: builder.mutation({
      query: (body) => ({
        url: 'users/signin',
        method: 'POST',
        body,
      }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: 'auth/login',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useSingInMutation, useLoginMutation } = userApi
