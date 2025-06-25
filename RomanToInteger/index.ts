function romanToInt(s: string): number {
  const numbers = new Map<string, number>();
  numbers.set("I", 1);
  numbers.set("V", 5);
  numbers.set("X", 10);
  numbers.set("L", 50);
  numbers.set("C", 100);
  numbers.set("D", 500);
  numbers.set("M", 1000);

  let acc = 0;
  for (let i = 0; i < s.length; i++) {
    const current = numbers.get(s[i]) || 0;
    if (current === 0) continue;
    if (current < (numbers.get(s[i + 1]) || 0)) {
      acc -= current;
    } else {
      acc += current;
    }
  }

  return acc;
}

// Example usage:
const test1 = romanToInt("III");
console.log({ roman: "III", test1, passed: test1 === 3 }); // Output: 3
const test2 = romanToInt("IV");
console.log({ roman: "IV", test2, passed: test2 === 4 }); // Output: 4
const test3 = romanToInt("IX");
console.log({ roman: "IX", test3, passed: test3 === 9 }); // Output: 9
const test4 = romanToInt("LVIII");
console.log({ roman: "LVIII", test4, passed: test4 === 58 }); // Output: 58
const test5 = romanToInt("MCMXCIV");
console.log({ roman: "MCMXCIV", test5, passed: test5 === 1994 }); // Output: 1994
