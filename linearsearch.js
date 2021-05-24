// Provlem Solving - Divide and Conquer

function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            console.log(i)
        }
    }
    console.log(-1);
}

linearSearch([1,2,3,4,5], 6)
// Time complexity O(N)
