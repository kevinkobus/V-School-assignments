// function largest(numArr) {
//   let largestNum = 0

//   for (var i = 0; i < numArr.length; i++) {
//     if (numArr[i] > largestNum)
//       largestNum = numArr[i]
//   }
//   return largestNum
// }

// console.log(largest(["6", "13", "250", "3"]))

// console.log(largest(["3", "5", "2", "8", "1"]))

// console.log(largest(["-13", "40", "3", "0", "19", "22"]))


// function lettersWithStrings(strArr, strInput) {

//   let words = []

//   for (let i = 0; i < strArr.length; i++) {
//     if (strArr[i].includes(strInput))
//       words.push(strArr[i])
//   }
//   return words
// }

// console.log(lettersWithStrings(["$hello!", "%%^%%", "test!"], "!"))

// console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"))

// console.log(lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h"))


function isDivisible(num1, num2){
  if (num1 % num2 === 0 ){
      return true
  } else {
      return false
  }
}

console.log(isDivisible(4, 2))

console.log(isDivisible(9, 3))

console.log(isDivisible(15, 4))