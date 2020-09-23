import cycle_sort from './cycle_sort';
import { unsortedArray, sortedArray } from '../test/main';

test('cycle sort test value must be array', () => {
  const actual = () => cycle_sort('helo');
  const expected = 'Data must be array';
  expect(actual).toThrowError(expected);
});

test('cycle sort test sorting', () => {
  const actual = cycle_sort(unsortedArray);
  const expected = sortedArray;
  expect(actual).toStrictEqual(expected);
});
