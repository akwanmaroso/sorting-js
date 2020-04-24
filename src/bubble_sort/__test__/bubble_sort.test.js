const { bubble_sort } = require('../bubble_sort');

test('bubble sort test sorting', () => {
  const actual = bubble_sort([10, 9, 8, 7, 6]);
  const expected = [6, 7, 8, 9, 10]
  expect(actual).toStrictEqual(expected);
});

test('bubble sort test value must be array', () => {
  const actual = bubble_sort('helo');
  const expected = 'Data must be array';
  expect(actual).toBe(expected);
});

