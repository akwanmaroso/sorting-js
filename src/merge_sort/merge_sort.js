const merge_sort = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('Data must be array');
  }

  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);

  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(merge_sort(left), merge_sort(right));
};

const merge = (left, right) => {
  let resultArr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      resultArr.push(left.shift());
    } else {
      resultArr.push(right.shift());
    }
  }

  return resultArr.concat(left).concat(right);
};

export default merge_sort;
