// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

//Create a test statement with expect statements that take in a number greater than 2 and returns an array containing the numbers of the numbers of the Fibonacci sequence.

describe("fibonacciSequence", () => {
  it ("returns an array with length containing the numbers of the Fibonacci Sequence", () => {
    let num1= 6
    let num2= 10
  expect(fibonacciSequence(6)).toEqual([1,1,2,3,5,8])
  expect(fibonacciSequence(10)).toEqual([1,1,2,3,5,8,13,21,34,55])
  })
})

// b) Create the function that makes the test pass.

// create a function that reflects that fibonacciSequence.
// create a function that passes through the parameter "i"
// use a for loop
// set the conditions for the i, i<arr.length; i ++


const fibonacciSequence = (i) => {
  let startArr= [i]
  for(let i= 1; i <arr.length; i++)

//console.log(fibonacciSequence(6,10))

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// Create a test statement for the array
describe("onlyOdd", () => {
  it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
    expect(onlyOdd(fullArr1)).toEqual([-9, 7, 9, 199])
    expect(onlyOdd(fullArr2)).toEqual([-823, 7, 23])
  })
})


// b) Create the function that makes the test pass.

// create a function called onlyOdd that takes in an array and returns a new one sorted from least to greatest
// use .sort to sort the array
// iterate over that array using the filter method
// return the intended result of the array


// const onlyOdd= (array) => {
//   let fullArr1.sort((a,b) => a-b
//   return array.filter(value => value !%2===0)
// })
// console.log(onlyOdd(fullArr1))
//
// const onlyOdd= (array) => {
//   let fullArr2.sort((a,b) => a-b
//   return array.filter(value => value !%2===0)
// })
// console.log(onlyOdd(fullArr2))

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []

//create a test statement for each of the arrays with specific outputs

describe("sumOfArray", () => {
  it("takes in an array and returns an array of the accumulating sum", () => {
    expect(sumOfArray(numbersToAdd1)).toEqual([2, 4, 45, 9])
    expect(sumOfArray(numbersToAdd2)).toEqual([0, 7, -8, 12])
    expect(sumOfArray(numbersToAdd3)).toEqual([])
  })
})

// b) Create the function that makes the test pass.

//create a function named sumOfArray that returns the array with the accumulating sum with the exception of an empty array
//use map method to iterate over the array and return the same amount of values back
//use built-in method to give the cumulative sum of arrays in an array
//stumped at this part but I feel like i have the right idea
//return the result of the array and console log it
const sumOfArray = (array) => {
  return array.map(value => accumulating(value))
}

console.log(sumOfArray(numbersToAdd1))
console.log(sumOfArray(numbersToAdd2))
console.log(sumOfArray(numbersToAdd3))
