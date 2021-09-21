import { HelloWord } from './index'

describe('First test', () => {
  it('should return Hello string', () => {
    const result = HelloWord('Linh')
    expect(result).toBe('Hello Linh')
  })
})
