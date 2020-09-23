const shell_sort = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('Data must be array');
  }
  let n = arr.length;
  let slot = Math.floor(n / 2);
  while (slot > 0) {
    for (let i = slot; i < n; i++) {
      let temp = arr[i];
      let j = i;
      while (j >= slot && arr[j - slot] > temp) {
        arr[j] = arr[j - slot];
        j -= slot;
      }
      arr[j] = temp;
    }
    slot = Math.floor(slot / 2);
  }
  return arr;
};

export default shell_sort;
