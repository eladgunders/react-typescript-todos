import { todoListApi } from 'services'
import { providesIDs } from 'utils/api'
import { CATEGORY_TAG_TYPE } from 'constants/api'
import type { Category } from 'types/category'

const categoriesApiPrefix: string = '/categories'

export const categoriesApi = todoListApi.injectEndpoints({
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    getAllCategories: builder.query<Category[], void>({
      query: () => {
        return {
          url: `${categoriesApiPrefix}`
        }
      },
      providesTags: (result) => providesIDs(result, CATEGORY_TAG_TYPE, true)
    }),
    createCategory: builder.mutation<Category, string>({
      query: (categoryName) => {
        return {
          url: `${categoriesApiPrefix}`,
          method: 'POST',
          body: { name: categoryName }
        }
      },
      invalidatesTags: [{ type: CATEGORY_TAG_TYPE, id: 'LIST' }]
    }),
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    deleteCategory: builder.mutation<void, number>({
      query: (categoryID) => {
        return {
          url: `${categoriesApiPrefix}/${categoryID}`,
          method: 'DELETE'
        }
      },
      invalidatesTags: (_result, _error, categoryID) => [{ type: CATEGORY_TAG_TYPE, categoryID }]
    })
  })
})

export const {
  useGetAllCategoriesQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation
} = categoriesApi
