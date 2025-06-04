function twoSum(nums: number[], target: number): number[] {
  const numMap = new Map<number, number>(); // Stores number -> index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.has(complement)) {
      // If the complement exists in the map, we found our pair
      return [numMap.get(complement)!, i];
    }
    // Otherwise, add the current number and its index to the map
    numMap.set(nums[i], i);
  }

  return []; // Return an empty array if no solution is found
}

console.log(twoSum([2, 7, 11, 15], 9)); // Expected output: [0, 1]

console.log(twoSum([3, 2, 4], 6)); // Expected output: [1, 2]

console.log(twoSum([3, 3], 6)); // Expected output: [0, 1]

console.log(twoSum([3, 2, 3], 6)); // Expected output: [0, 2]
