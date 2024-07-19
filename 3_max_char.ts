// --- Directions
// Given a string, return the character that is most
// commonly used in the string
// --- Examples
// maxChar("abcccccccd") = "c"
// maxChar("apple 1231111") = "1"

const maxChar = (str: string): string => {
  const charMap: { [key: string]: number } = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
};

console.log(maxChar("apple 1231111"));

//more verbose for clarity
const maxFrequency = (str: string) => {
  let obj: { [key: string]: number } = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }

  for (let char in obj) {
    if (obj[char] > max) {
      max = obj[char];
      maxChar = char;
    }
  }

  return maxChar;
};

console.log(maxFrequency("abcccccccd"));
