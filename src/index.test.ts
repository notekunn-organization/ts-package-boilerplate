import { HelloWord, hello } from './index'

describe('First test', () => {
  it('should return Hello string', () => {
    const result = HelloWord('Linh')
    expect(result).toBe('Hello Linh')
  })
})

describe('Interface', () => {
  it('hello should have hello property', () => {
    expect(hello).toHaveProperty('hello')
  })
  it('hello property should be string', () => {
    expect(typeof hello.hello).toBe('string')
  })
})
