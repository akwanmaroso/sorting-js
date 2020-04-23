module.exports.bubble_sort = (arr) => {
  let temp;
  if (!Array.isArray(arr)) {
    console.log('Data must be array');
    return;
  }
  let len = arr.length - 1
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp
      }
    }
  }
  return arr;
}