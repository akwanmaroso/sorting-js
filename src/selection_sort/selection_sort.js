const selection_sort = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('Data must be array');
  }
  let min, temp;
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    min = i;
    for (let j = i + 1; j <= n - 1; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  return arr;
};

export default selection_sort;
