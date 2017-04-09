import test from 'ava'
import i from './'

// Checks if intersection works
test('Test intersection of objects.', t => {
  const a = { foo: 1, bar: { zoo: 1} }
  const b = { foo: 1 }
  const c = { foo: 1, bar: 1 }

  t.deepEqual(i([a, b], [a, c], [a, b, c]), [a])
})

test('Normal intersection.', t => {
  const a = 'a'
  const b = 'b'
  const c = 'c'
  const d = 'd'

  t.deepEqual(i([a, b, c, d], [a, c, d], [b, c, d]), [c, d])
})

test('Array of arrays.', t => {
  const a = 'a'
  const b = 'b'
  const c = 'c'
  const d = 'd'

  t.deepEqual(i([[a, b, c, d], [a, c, d], [b, c, d]]), [c, d])
})

// Checks if errors work
test.failing('Error', () => {
  i('a', ['a'])
})

test.failing('Error (array of arrays).', () => {
  i(['a', ['a']])
})
