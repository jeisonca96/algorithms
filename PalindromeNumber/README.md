# Palindrome Number

## Problem Description

Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

## Examples

- **Example 1:**
  - Input: `x = 121`
  - Output: `true`
  - Explanation: 121 reads as 121 from left to right and from right to left.

- **Example 2:**
  - Input: `x = -121`
  - Output: `false`
  - Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

- **Example 3:**
  - Input: `x = 10`
  - Output: `false`
  - Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

## Algorithm Approach

This solution uses a **number reversal approach** to check if a number is a palindrome:

1. **Edge Cases:**
   - Negative numbers are not palindromes (return `false`)
   - Single-digit numbers are palindromes (return `true`)

2. **Reverse the Number:**
   - Extract the last digit using modulo operator (`x % 10`)
   - Remove the last digit by integer division (`Math.floor(x / 10)`)
   - Build the reversed number by multiplying the current reversed number by 10 and adding the extracted digit

3. **Compare:**
   - Compare the original number with the reversed number
   - If they are equal, the number is a palindrome

## Time and Space Complexity

- **Time Complexity:** O(log₁₀(n)) where n is the input number
  - We divide the number by 10 in each iteration
- **Space Complexity:** O(1)
  - We only use a constant amount of extra space

## Code Implementation

```typescript
function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  if (x < 10) return true;

  const originalNumber = x;
  let reversedNumber = 0;

  while (x > 0) {
    const lastDigit = x % 10;
    x = Math.floor(x / 10);
    reversedNumber = reversedNumber * 10 + lastDigit;
  }

  return originalNumber === reversedNumber;
}
```

## How to Run

1. Make sure you have Node.js and TypeScript installed
2. Compile and run the TypeScript file:
   ```bash
   npm run palindrome-number
   ```

## Test Cases

The implementation includes the following test cases:

```typescript
console.log(isPalindrome(121));  // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10));   // false
```

## Alternative Approaches

1. **String Conversion:** Convert the number to a string and compare with its reverse
2. **Half Reversal:** Only reverse half of the number to optimize space (advanced approach)

## Follow-up

Could you solve it without converting the integer to a string? This implementation achieves that by using mathematical operations only.
