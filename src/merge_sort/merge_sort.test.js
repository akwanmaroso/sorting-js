import merge_sort from "./merge_sort";

test('merge sort test value must be array', () => {
  const actual = (() => merge_sort('hello'));
  const expected = 'Data must be array';
  expect(actual).toThrowError(expected);
})


test('merge sort test sorting', () => {
  const actual = merge_sort([10, 9, 8, 7, 6]);
  const expected = [6,7,8,9,10];
  expect(actual).toStrictEqual(expected);
})

