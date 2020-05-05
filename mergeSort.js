// merge function
const merge = (a = [], b = []) => {
  let arr = [];

  let l = [...a, Infinity];
  let r = [...b, Infinity];

  let i = 0;
  let j = 0;

  while (i < l.length - 1 || j < r.length - 1) {
    if (l[i] <= r[j]) arr.push(l[i++]);
    else if (r[j] <= l[i]) arr.push(r[j++]);
  }

  return arr;
};

// break into smaller pieces
function binaryBreak(arr) {
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);

  return [sortedLeft, sortedRight];
}

// final sorting function
export function mergeSort(arr) {
  // sorted - only one value or no value
  if (arr.length <= 1) return arr;

  let [sortedLeft, sortedRight] = binaryBreak(arr);

  let merged = merge(sortedLeft, sortedRight);

  // sorted
  return merged;
}


// Todo: Check for Infinity Case
