const divide = (arr, n) => {
    const result = [];
    let currentSubarray = [];

    for (const num of arr) {
        // If adding num to the current subarray doesn't exceed n, add it
        if (currentSubarray.reduce((acc, val) => acc + val, 0) + num <= n) {
            currentSubarray.push(num);
        } else {
            // If adding num would exceed n, start a new subarray
            result.push(currentSubarray);
            currentSubarray = [num];
        }
    }

    // Push the last subarray
    if (currentSubarray.length > 0) {
        result.push(currentSubarray);
    }

    return result;
};

// Test cases
const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const n = parseInt(prompt("Enter n: "));
alert(JSON.stringify(divide(arr, n)));
