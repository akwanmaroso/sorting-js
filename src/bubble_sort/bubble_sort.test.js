import bubble_sort from './bubble_sort';
import { unsortedArray, sortedArray } from '../test/main';

test('bubble sort test sorting', () => {
  const actual = bubble_sort(unsortedArray);
  const expected = sortedArray;
  expect(actual).toStrictEqual(expected);
});

test('bubble sort test value must be array', () => {
  const actual = () => bubble_sort('helo');
  const expected = 'Data must be array';
  expect(actual).toThrowError(expected);
});
