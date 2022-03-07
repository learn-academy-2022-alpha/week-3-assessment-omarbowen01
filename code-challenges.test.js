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
  expect(fibonacciSequence(num>2)).toEqual("")
  })
})

// b) Create the function that makes the test pass.

// create a function that reflects that fibonacciSequence. The next number is found by adding up the two numbers before it.
// tried a console log to run the data.

var num= [i]

const fibonacciSequence = (num) => {
  if (num>2) {
    return (num-1) + (num-2)
else {
  return ("invalid")
}
  }
}

console.log(num(i))
//what i have so far is this and I'm stumped on it.


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// Create a test statement for the array
describe("onlyOdd", () => {
  it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
    expect(onlyOdd(fullArr1, fullArr2)).toEqual(result)
  })
})


// b) Create the function that makes the test pass.

//create function that takes in an array and returns a new one sorted from least to greatest
const fullArr1= (array) => {
  let fullArr1.sort((a,b) => a-b
  return array.filter(value => value !%2===0)
})
console.log(fullArr1)

const fullArr2= (array) => {
  let fullArr2.sort((a,b) => a-b
  return array.filter(value => value !%2===0)
})
console.log(fullArr2)

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []

//create a test statement for the array
describe("sumOfArray", () => {
  it("Creates a function that takes in an array and returns an array of the accumulating sum", () => {
    expect(sumOfArray(numbersToAdd1, numbersToAdd2, numbersToAdd3)).toEqual(result)
  })
})



// b) Create the function that makes the test pass.

//try to make a function that will iterate through the array and return that same set of value
//use map function

const addingSum = numbersToAdd1.map(value => {
  return value
})
console.log(addingSum(sumOfArray(""))
