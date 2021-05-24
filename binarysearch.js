// Binary Search is a much faster search than a linear search
// Eliminate half of the remaining elements at a time
// Binary search works on SORTED ARRAYS ONLY

function binarySearch(array, value) {
    let start = 0;
    let end = array.length - 1;
    let middle = Math.floor((start + end) /2);
    while (array[middle] !== value && start <= end) {
        if (value < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2)
    }
    if (array[middle] === value) {
        console.log(middle);
        return middle;
    }

    console.log(-1);
    return -1;
}

binarySearch([1,2,3,4,5,6,7,8,9,10], 4)
binarySearch([1,2,3,4,5,6,7,8,9,10], 11)
binarySearch([1,2,3,4,5,6,7,8,9,10], 5)