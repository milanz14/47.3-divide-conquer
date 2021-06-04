// Binary Search is a much faster search than a linear search
// Eliminate half of the remaining elements at a time
// Binary search works on SORTED ARRAYS ONLY

const binarySearch = (arr, val) => {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (arr[middle] === val) {
            console.log(middle);
            return middle;
        } 
        if (arr[middle] > val) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }

        middle = Math.floor((start + end) / 2)
    }
    console.log(-1)
    return -1;
}

binarySearch([1,2,3,4,5,6,7,8,9,10], 4)
binarySearch([1,2,3,4,5,6,7,8,9,10], 11)
binarySearch([1,2,3,4,5,6,7,8,9,10], 5)