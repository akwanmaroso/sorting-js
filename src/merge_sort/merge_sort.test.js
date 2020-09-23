import merge_sort from './merge_sort';
import { unsortedArray, sortedArray } from '../test/main';

test('merge sort test value must be array', () => {
  const actual = () => merge_sort('hello');
  const expected = 'Data must be array';
  expect(actual).toThrowError(expected);
});

test('merge sort test sorting', () => {
  const actual = merge_sort(unsortedArray);
  const expected = sortedArray;
  expect(actual).toStrictEqual(expected);
});
