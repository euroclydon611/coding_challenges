//1. Given a string, w the character that is most commonly used in the string
// --- Examples
// maxChar("abcccccccd") = "c"
// maxChar("apple 1231111") = "1"

const maxCharEx = (str: string): string => {
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

console.log(maxCharEx("abcccccccd"));
