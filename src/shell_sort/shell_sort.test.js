import shell_sort from './shell_sort';
import { unsortedArray, sortedArray } from '../test/main';

test('shell sort test value must be array', () => {
  const actual = () => shell_sort('helo');
  const expected = 'Data must be array';
  expect(actual).toThrowError(expected);
});

test('shell sort test sorting', () => {
  const actual = shell_sort(unsortedArray);
  const expected = sortedArray;
  expect(actual).toStrictEqual(expected);
});
