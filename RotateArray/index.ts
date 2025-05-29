/**
 * Rotates an array to the right by k steps.
 * Elements that wrap around from the end reappear at the beginning.
 *
 * @param {number} n - The number of elements in the array (length of the array).
 * @param {number} k - The number of steps to rotate the array to the right.
 * @param {number[]} arr - The array of numbers to rotate.
 * @returns {number[]} - The rotated array.
 */
function rotateArray(n: number, k: number, arr: number[]): number[] {
  // Ensure k is within the bounds of the array length
  k = k % n;
  if (k === 0) return arr; // No rotation needed

  // Split the array into two parts and concatenate them in the rotated order
  // Last k elements and the first n-k elements
  const lastPart = arr.slice(n - k);
  const firstPart = arr.slice(0, n - k);

  // Concatenate the last part with the first part
  return lastPart.concat(firstPart);
}

// example 1
console.log(rotateArray(5, 2, [1, 2, 3, 4, 5])); // Expected output: [4, 5, 1, 2, 3]

// example 2
console.log(rotateArray(3, 1, [8, 9, 10])); // Expected output: [10, 8, 9]

// example 3
console.log(rotateArray(7, 5, [45, 46, 47, 48, 49, 50, 51])); // Expected output: [47, 48, 49, 50, 51, 45, 46]
