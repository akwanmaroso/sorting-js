import radix_sort from './radix_sort';
import { unsortedArray, sortedArray } from '../test/main';

test('radix sort test value must be array', () => {
  const actual = () => radix_sort('helo');
  const expected = 'Data must be array';
  expect(actual).toThrowError(expected);
});

test('radix sort test', () => {
  const actual = radix_sort(unsortedArray);
  const expected = sortedArray;
  expect(actual).toStrictEqual(expected);
});
