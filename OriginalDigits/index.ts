function originalDigits(s: string): string {
  const charCounts: Map<string, number> = new Map();
  for (const char of s) {
    charCounts.set(char, (charCounts.get(char) || 0) + 1);
  }

  const digitCounts: number[] = new Array(10).fill(0);

  // Identify unique digits first
  digitCounts[0] = charCounts.get("z") || 0; // zero
  digitCounts[2] = charCounts.get("w") || 0; // two
  digitCounts[4] = charCounts.get("u") || 0; // four
  digitCounts[6] = charCounts.get("x") || 0; // six
  digitCounts[8] = charCounts.get("g") || 0; // eight

  // Deduce remaining digits
  digitCounts[3] = (charCounts.get("h") || 0) - digitCounts[8]; // three (eight)
  console.log(charCounts.get("f"));
  digitCounts[5] = (charCounts.get("f") || 0) - digitCounts[4]; // five (four)
  digitCounts[7] = (charCounts.get("s") || 0) - digitCounts[6]; // seven (six)

  // 'i' appears in five, six, eight, nine
  digitCounts[9] =
    (charCounts.get("i") || 0) -
    digitCounts[5] -
    digitCounts[6] -
    digitCounts[8]; // nine (five, six, eight)

  // 'o' appears in zero, one, two, four
  digitCounts[1] =
    (charCounts.get("o") || 0) -
    digitCounts[0] -
    digitCounts[2] -
    digitCounts[4]; // one (zero, two, four)

  let result = "";
  for (let i = 0; i < 10; i++) {
    result += String(i).repeat(digitCounts[i]);
  }

  return result;
}

console.log(originalDigits("owoztneoer")); // Expected output: "012"
console.log(originalDigits("fviefurofive")); // Expected output: "45"
console.log(originalDigits("zeroonetwothreefourfivesixseveneightnine")); // Expected output: "0123456789"
console.log(originalDigits("nineeightsevensixfivefourthreetwoonezero")); // Expected output: "0123456789"
