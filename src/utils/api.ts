import type { CacheTag } from 'types/api'

export const providesIDs =
  <R extends Array<{ id: number }>, T extends CacheTag>
  (
    resultsWithIds: R | undefined,
    tagType: T,
    withList: boolean
  ): Array<{ id: string, type: T } | { id: string | number, type: T }> => {
    if (resultsWithIds !== undefined) {
      const idsTags: Array<{ type: T, id: number }> =
        resultsWithIds.map(({ id }) => ({ type: tagType, id }))
      if (withList) {
        return [...idsTags, { type: tagType, id: 'LIST' }]
      }
      return idsTags
    } else {
      if (withList) {
        return [{ type: tagType, id: 'LIST' }]
      }
      return []
    }
  }
