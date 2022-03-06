import { describe, expect, test } from 'vitest'
import { hello } from './index'

describe('Hello', () => {
  test('Should say hello correctly', () => {
    expect(hello('world')).toBe('Hello, world!')
  })
})
