import selection_sort from './selection_sort';
import { unsortedArray, sortedArray } from '../test/main';

test('selection sort test value must be array', () => {
  const actual = () => selection_sort('helo');
  const expected = 'Data must be array';
  expect(actual).toThrowError(expected);
});

test('selection sort test sorting', () => {
  const actual = selection_sort(unsortedArray);
  const expected = sortedArray;
  expect(actual).toStrictEqual(expected);
});
