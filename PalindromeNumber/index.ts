function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  if (x < 10) return true;

  const originalNumber = x;
  let reversedNumber = 0;

  while (x > 0) {
    const lastDigit = x % 10;

    x = Math.floor(x / 10);
    reversedNumber = reversedNumber * 10 + lastDigit;
    console.log({ reversedNumber, lastDigit, x });
  }

  return originalNumber === reversedNumber;
}

// Example 1
console.log(isPalindrome(121)); // Expected output: true
// Example 2
console.log(isPalindrome(-121)); // Expected output: false
// Example 3
console.log(isPalindrome(10)); // Expected output: false
