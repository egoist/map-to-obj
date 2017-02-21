import mapToObj from '../src'

test('main', () => {
  const map = new Map()
  map.set('foo', '123')
  map.set('bar', {a: 1})

  const obj = mapToObj(map)

  expect(obj).toEqual({
    foo: '123',
    bar: {a: 1}
  })
})
