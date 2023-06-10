import type { Priority } from 'types/priority'
import type { Category } from 'types/category'

export interface TodoBase {
  content: string
  is_completed?: boolean
}

export interface Todo extends TodoBase {
  id: number
  is_completed: boolean
  priority: Priority
  categories: Category[]
}

export interface TodoCreate extends TodoBase {
  priority_id: number
  categories_ids: number[]
}

export interface TodoUpdate extends TodoCreate {
  id: number
  is_completed: boolean
}
