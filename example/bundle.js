var bubble_sort = function bubble_sort(arr) {
  var temp;

  if (!Array.isArray(arr)) {
    throw new Error('Data must be array');
  }

  var len = arr.length - 1;

  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
};

var cycle_sort = function cycle_sort(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Data must be array');
  }

  var temp;
  var n = arr.length;

  for (var start = 0; start < n - 1; start++) {
    var key = arr[start];
    var loc = start;

    for (var i = start + 1; i < n; i++) {
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
      temp = arr[loc];
      arr[loc] = key;
      key = temp;
    }

    while (loc != start) {
      loc = start;

      for (var x = start + 1; x < n; x++) {
        if (arr[x] < key) {
          loc++;
        }
      }

      while (key == arr[loc]) {
        loc++;
      }

      if (key != arr[loc]) {
        temp = arr[loc];
        arr[loc] = key;
        key = temp;
      }
    }
  }

  return arr;
};

var insertion_sort = function insertion_sort(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Data must be array');
  }

  var j, key;
  var n = arr.length;

  for (var i = 0; i < n; i++) {
    key = arr[i];
    j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
};

var selection_sort = function selection_sort(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Data must be array');
  }

  var min, temp;
  var n = arr.length;

  for (var i = 0; i < n - 1; i++) {
    min = i;

    for (var j = i + 1; j <= n - 1; j++) {
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

var shell_sort = function shell_sort(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Data must be array');
  }

  var n = arr.length;
  var slot = Math.floor(n / 2);

  while (slot > 0) {
    for (var i = slot; i < n; i++) {
      var temp = arr[i];
      var j = i;

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

export { bubble_sort, cycle_sort, insertion_sort, selection_sort, shell_sort };
