const insertion_sort = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('Data must be array');
  }
  let j, key;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    key = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

export default insertion_sort;