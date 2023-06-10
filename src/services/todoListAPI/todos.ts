import { todoListApi } from 'services'
import { providesIDs } from 'utils/api'
import { TODO_TAG_TYPE } from 'constants/api'
import type { Todo, TodoCreate, TodoUpdate } from 'types/todo'

const todosApiPrefix: string = '/todos'

export const todosApi = todoListApi.injectEndpoints({
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    getAllTodos: builder.query<Todo[], void>({
      query: () => {
        return {
          url: `${todosApiPrefix}`
        }
      },
      providesTags: (result) => providesIDs(result, TODO_TAG_TYPE, true)
    }),
    createTodo: builder.mutation<Todo, TodoCreate>({
      query: (todoToCreate) => {
        return {
          url: `${todosApiPrefix}`,
          method: 'POST',
          body: todoToCreate
        }
      },
      invalidatesTags: [{ type: TODO_TAG_TYPE, id: 'LIST' }]
    }),
    updateTodo: builder.mutation<Todo, TodoUpdate>({
      query: (updatedTodo) => {
        const { id, ...body } = updatedTodo
        return {
          url: `${todosApiPrefix}/${id}`,
          method: 'PUT',
          body
        }
      },
      invalidatesTags: (_result, _error, { id }) => [{ type: TODO_TAG_TYPE, id }]
    }),
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    deleteTodo: builder.mutation<void, number>({
      query: (todoID) => {
        return {
          url: `${todosApiPrefix}/${todoID}`,
          method: 'DELETE'
        }
      },
      invalidatesTags: (_result, _error, todoID) => [{ type: TODO_TAG_TYPE, todoID }]
    })
  })
})

export const {
  useGetAllTodosQuery,
  useCreateTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation
} = todosApi
