function countOccurrences(arr, target) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }
    }
    return count;
}


let arr = [2, 5, 7, 2, 8, 2, 9, 2];
let target = 2;
console.log(countOccurrences(arr, target)); 