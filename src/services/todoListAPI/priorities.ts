import { todoListApi } from 'services'
import { providesIDs } from 'utils/api'
import type { Priority } from 'types/priority'
import { PRIORITY_TAG_TYPE } from 'constants/api'

const prioritiesApiPrefix: string = '/priorities'

export const prioritiesApi = todoListApi.injectEndpoints({
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    getAllPriorities: builder.query<Priority[], void>({
      query: () => {
        return {
          url: `${prioritiesApiPrefix}`
        }
      },
      providesTags: (result) => providesIDs(result, PRIORITY_TAG_TYPE, true)
    })
  })
})

export const { useGetAllPrioritiesQuery } = prioritiesApi
