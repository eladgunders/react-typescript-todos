import type { PRIORITY_TAG_TYPE, CATEGORY_TAG_TYPE, TODO_TAG_TYPE } from 'constants/api'

export type CacheTag =
  typeof PRIORITY_TAG_TYPE |
  typeof CATEGORY_TAG_TYPE |
  typeof TODO_TAG_TYPE
