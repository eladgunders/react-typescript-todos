import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PRIORITY_TAG_TYPE, CATEGORY_TAG_TYPE, TODO_TAG_TYPE } from 'constants/api'

const baseQuery = fetchBaseQuery(
  {
    baseUrl: process.env.API_BASE_URL
  })

export const todoListApi = createApi({
  reducerPath: 'todoListApi',
  baseQuery,
  tagTypes: [
    PRIORITY_TAG_TYPE,
    CATEGORY_TAG_TYPE,
    TODO_TAG_TYPE
  ],
  endpoints: () => ({})
})
