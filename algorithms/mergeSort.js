// merge function
function merge(l = [], r = []) {
  let arr = [];

  let i = 0;
  let j = 0;

  while (i < l.length || j < r.length) {
    if (isNumber(l[i]) && isNumber(r[j])) {
      if (l[i] <= r[j]) arr.push(l[i++]);
      if (r[j] <= l[i]) arr.push(r[j++]);
    } else if (isNumber(l[i])) arr.push(l[i++]);
    else if (isNumber(r[j])) arr.push(r[j++]);
  }

  return arr;
}

// utility
function isNumber(x) {
  if ((x > 0 || x < 0 || x === 0) && typeof x === "number") return true;
  else return false;
}

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
  if (!arr) return null;

  // sorted - only one value or no value
  if (arr.length <= 1) return arr;

  let [sortedLeft, sortedRight] = binaryBreak(arr);

  let merged = merge(sortedLeft, sortedRight);

  // sorted
  return merged;
}
