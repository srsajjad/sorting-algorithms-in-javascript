export function quickSort(arr) {
    if (!arr || arr.length === 0) return [];

    if (arr.length === 1) return arr;

    if (arr.length === 2) {
        let max = Math.max(arr[0], arr[1]);
        let min = Math.min(arr[0], arr[1]);

        return [min, max];
    }

    // index - pivot pointer, left pointer and right pointer
    let p = arr.length - 1;
    let l = 0;
    let r = p - 1;

    while (true) {
        let left = arr[l];
        let right = arr[r];
        let pivot = arr[p];

        if (l >= r) {
            if (pivot < left) {
                // swap
                arr[l] = pivot;
                arr[p] = left;
            }

            break;
        }

        if (left > pivot && right < pivot) {
            // swap
            arr[l++] = right;
            arr[r--] = left;
            continue;
        }

        if (right > pivot) r--;
        if (left < pivot) l++;
    }

    let leftArr = quickSort(arr.slice(0, l + 1));
    let rightArr = quickSort(arr.slice(l + 1, arr.length));

    return [...leftArr, ...rightArr];
}
