// --- Directions
// Given a string, return a new string with reversed order of characters
// --- Examples
//   reverse("hi") === "ih"
//   reverse("hello") === "olleh"
//   reverse("george") === "egroeg"

//method 1
const reverseUsingSplitAndReduce = (str: string): string => {
  const splitString = str.split("");
  const reverse = splitString.reduce(
    (acc: string, curr: string) => curr + acc,
    ""
  );
  return reverse;
};

console.log(reverseUsingSplitAndReduce("george"));

//method 2
const reverseUsingSplitReverseAndJoin = (str: string): string => {
  const splitString = str.split("");
  const reverseAndJoin = splitString.reverse().join("");

  return reverseAndJoin;
};

console.log(reverseUsingSplitReverseAndJoin("hello"));

//method 3
const reverseUsingSpreadOperator = (str: string): string => {
  const revStr = [...str].reverse().join("");
  return revStr;
};

console.log(reverseUsingSpreadOperator("University"));

//method 4
const reversUsingLoop = (str: string) => {
  let reversedString = "";
  for (let index = str.length - 1; index >= 0; index--) {
    reversedString += str[index];
  }
  return reversedString;
};

//method 5
const reverseUsingLoop2 = (str: string) => {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
};

console.log(reversUsingLoop("hello"));
console.log(reverseUsingLoop2("hello"));
