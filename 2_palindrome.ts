// --- Directions
// Given a string, return true if the string is a palindrome or false if it is not.
// Palindromes are strings that form the same word if it is reversed
// --- Examples
//   reverse("kayak") === true
//   reverse("madam") === true
//   reverse("george") === false

//method 1
const palindromeWithSplitAndReverse = (str: string) => {
  const reversed = str.split("").reverse().join("");

  return reversed === str;
};
console.log(palindromeWithSplitAndReverse("madam"));

//method 2
const palindromeWithLoop = (str: string) => {
  let reversed = "";
  for (let i of str) {
    reversed = i + reversed;
  }

  return reversed === str;
};
console.log(palindromeWithLoop("george"));

//method 2 (using the two pointers)

const palindromeWithTwoPointers = (str: string) => {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log(palindromeWithTwoPointers("kayak"));
