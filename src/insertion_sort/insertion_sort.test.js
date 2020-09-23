import insertion_sort from './insertion_sort';
import { unsortedArray, sortedArray } from '../test/main';

test('insertion sort test value must be array', () => {
  const actual = () => insertion_sort('helo');
  const expected = 'Data must be array';
  expect(actual).toThrowError(expected);
});

test('insertion sort test sorting', () => {
  const actual = insertion_sort(unsortedArray);
  const expected = sortedArray;
  expect(actual).toStrictEqual(expected);
});
