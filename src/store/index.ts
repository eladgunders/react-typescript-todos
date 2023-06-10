import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { todoListApi } from 'services'

const rootReducer = combineReducers({
  [todoListApi.reducerPath]: todoListApi.reducer
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoListApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
