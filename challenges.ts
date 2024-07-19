//1. --- Directions
// Given a string, return an integer that is the  reverse ordering of numbers
// --- Examples
//   reverseInt(35) === 35
//   reverseInt(87) === 78
//   reverseInt(-15) === -51
//   reverseInt(189) === 981

//method 1
const reverseInt = (num: number) => {
  let reversed = "";
  const convertToArr = num.toString().split("");
  if (convertToArr[0] === "-") {
    reversed = convertToArr[0] + convertToArr.splice(1).reverse().join("");
  } else {
    reversed = convertToArr.reverse().join("");
  }
  return parseInt(reversed);
};

//method 2
const reverseWithLoop = (num: number) => {
  const convertToArr = num.toString().split("");
  let reversed = "";
  if (convertToArr[0] === "-") {
    for (let i of convertToArr.splice(1)) {
      reversed = i + reversed;
    }
    return parseInt(convertToArr[0] + reversed);
  } else {
    for (let i of convertToArr) {
      reversed = reversed + i;
    }
    return parseInt(reversed);
  }
};

//simplest method
const reverseInt1 = (num: number) => {
  const reversed = num.toString().split("").reverse().join("");
  console.log("reversed", parseInt(reversed));
  return parseInt(reversed) * Math.sign(num);
};

console.log(reverseInt(-90));
console.log(reverseWithLoop(-90));
console.log(reverseInt1(-700));
