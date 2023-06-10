import { todoListApi } from 'services'
import type { LoginReqPayload, LoginResPayload } from 'types/auth'
import type { User, UserCreate } from 'types/user'

const authApiPrefix: string = '/auth'

export const authApi = todoListApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<User, UserCreate>({
      query: (newUser) => {
        return {
          url: `${authApiPrefix}/register`,
          method: 'POST',
          body: newUser
        }
      }
    }),
    login: builder.mutation<LoginResPayload, LoginReqPayload>({
      query: ({ username, password }) => {
        const body: URLSearchParams = new URLSearchParams({ username, password })
        return {
          url: `${authApiPrefix}/login`,
          method: 'POST',
          body
        }
      }
    })
  })
})

export const {
  useRegisterMutation,
  useLoginMutation
} = authApi
