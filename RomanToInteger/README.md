# Roman to Integer Converter

A TypeScript implementation that converts Roman numerals to integers.

## Problem Description

Given a Roman numeral string, convert it to an integer. Roman numerals are represented by seven different symbols:

| Symbol | Value |
|--------|-------|
| I      | 1     |
| V      | 5     |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |

## Rules

Roman numerals are usually written largest to smallest from left to right. However, in some cases, a smaller numeral appears before a larger one to indicate subtraction:

- `I` can be placed before `V` (5) and `X` (10) to make 4 and 9
- `X` can be placed before `L` (50) and `C` (100) to make 40 and 90
- `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900

## Algorithm

The solution uses a single pass through the string with the following logic:

1. Create a mapping of Roman symbols to their integer values
2. Iterate through each character in the Roman numeral string
3. For each character:
   - If the current value is less than the next value, subtract it (subtraction case)
   - Otherwise, add it to the accumulator
4. Return the final accumulated value

## Time & Space Complexity

- **Time Complexity**: O(n) where n is the length of the input string
- **Space Complexity**: O(1) as we use a fixed-size map for the Roman numerals

## Usage

```typescript
function romanToInt(s: string): number
```

### Parameters
- `s`: A valid Roman numeral string

### Returns
- The integer representation of the Roman numeral

## Examples

```typescript
romanToInt("III");     // Returns: 3
romanToInt("IV");      // Returns: 4
romanToInt("IX");      // Returns: 9
romanToInt("LVIII");   // Returns: 58
romanToInt("MCMXCIV"); // Returns: 1994
```

## Test Cases

The implementation includes several test cases that verify the correctness:

- `"III"` → `3` (simple addition)
- `"IV"` → `4` (subtraction case: I before V)
- `"IX"` → `9` (subtraction case: I before X)
- `"LVIII"` → `58` (mixed addition: 50 + 5 + 1 + 1 + 1)
- `"MCMXCIV"` → `1994` (complex case with multiple subtractions: 1000 + 900 + 90 + 4)

## Running the Code

To run this code:

1. Make sure you have Node.js and TypeScript installed
2. Navigate to the RomanToInteger directory
3. Run: `npm run roman-to-integer`

The output will show the test results with pass/fail status for each test case.
