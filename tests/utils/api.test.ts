import { providesIDs } from 'utils/api'

describe('providesIDs', () => {
  test('returns empty array when resultsWithIds is undefined and withList is false', () => {
    const result = providesIDs(undefined, 'Todo', false)
    expect(result).toEqual([])
  })

  test('returns list tag when resultsWithIds is undefined and withList is true', () => {
    const result = providesIDs(undefined, 'Todo', true)
    expect(result).toEqual([{ type: 'Todo', id: 'LIST' }])
  })

  test('returns array of id objects when resultsWithIds is not undefined and withList is false', () => {
    const resultsWithIds = [{ id: 1 }, { id: 2 }]
    const result = providesIDs(resultsWithIds, 'Todo', false)
    expect(result).toEqual([
      { type: 'Todo', id: 1 },
      { type: 'Todo', id: 2 }
    ])
  })

  test('returns array of id objects with list tag when resultsWithIds is not undefined and withList is true', () => {
    const resultsWithIds = [{ id: 1 }, { id: 2 }]
    const result = providesIDs(resultsWithIds, 'Todo', true)
    expect(result).toEqual([
      { type: 'Todo', id: 1 },
      { type: 'Todo', id: 2 },
      { type: 'Todo', id: 'LIST' }
    ])
  })
})
