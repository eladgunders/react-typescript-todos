import { providesIDs } from 'utils/api'
import { CATEGORY_TAG_TYPE, PRIORITY_TAG_TYPE, TODO_TAG_TYPE } from 'constants/api'

describe('providesIDs', () => {
  test('returns empty array when resultsWithIds is undefined and withList is false', () => {
    const result = providesIDs(undefined, TODO_TAG_TYPE, false)
    expect(result).toEqual([])
  })

  test('returns list tag when resultsWithIds is undefined and withList is true', () => {
    const result = providesIDs(undefined, TODO_TAG_TYPE, true)
    expect(result).toEqual([{ type: TODO_TAG_TYPE, id: 'LIST' }])
  })

  test('returns array of id objects when resultsWithIds is not undefined and withList is false', () => {
    const resultsWithIds = [{ id: 1 }, { id: 2 }]
    const result = providesIDs(resultsWithIds, PRIORITY_TAG_TYPE, false)
    expect(result).toEqual([
      { type: PRIORITY_TAG_TYPE, id: 1 },
      { type: PRIORITY_TAG_TYPE, id: 2 }
    ])
  })

  test('returns array of id objects with list tag when resultsWithIds is not undefined and withList is true', () => {
    const resultsWithIds = [{ id: 1 }, { id: 2 }]
    const result = providesIDs(resultsWithIds, CATEGORY_TAG_TYPE, true)
    expect(result).toEqual([
      { type: CATEGORY_TAG_TYPE, id: 1 },
      { type: CATEGORY_TAG_TYPE, id: 2 },
      { type: CATEGORY_TAG_TYPE, id: 'LIST' }
    ])
  })
})
