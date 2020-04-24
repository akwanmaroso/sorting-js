module.exports.cycle_sort = arr => {
  let temp;
  let n = arr.length;
  for (let start = 0; start < n - 1; start++) {
    let key = arr[start];
    let loc = start;

    for (let i = start + 1; i < n; i++) {
      if (arr[i] < key) {
        loc++;
      }
    }
    if (loc == start) {
      continue;
    }
    while (key == arr[loc]) {
      loc++;
    }
    if (loc != start) {
      temp = arr[loc]
      arr[loc] = key;
      key = temp;
    }
    while (loc != start) {
      loc = start;
      for (let x = start + 1; x < n; x++) {
        if (arr[x] < key) {
          loc++;
        }
      }
      while (key == arr[loc]) {
        loc++;
      }
      if (key != arr[loc]) {
        temp = arr[loc]
        arr[loc] = key;
        key = temp;
      }
    }
  }
  console.log(arr);
  return arr;
}