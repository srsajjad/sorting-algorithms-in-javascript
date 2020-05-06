export function insertionSort(arr) {
  // sorting
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j >= 0; j--) {
      let curr = arr[j];
      let prev = arr[j - 1];

      if (!isFinite(prev)) break;

      if (curr > prev) break;
      else {
        //swap
        arr[j] = prev;
        arr[j - 1] = curr;
      }
    }
  }

  return arr;
}
