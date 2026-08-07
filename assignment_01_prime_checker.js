// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 1
// =============================================================================
//
// TASK: Prime Number Checker
//
// Write a JavaScript program that checks whether a given number is prime.
//
// A prime number is a whole number greater than 1 that has no divisors
// other than 1 and itself (e.g., 2, 3, 5, 7, 11, 13 ...).
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_01_prime_checker.js
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT / OUTPUT EXAMPLES
// -----------------------------------------------------------------------------
//
//   Enter a number: 7
//   7 is a prime number.
//
//   Enter a number: 10
//   10 is NOT a prime number.
//
//   Enter a number: 1
//   1 is NOT a prime number.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - You MUST implement the logic inside a function (see scaffold below).
// - Numbers less than 2 are NOT prime — handle this inside the function.
// - The main() function must call isPrime() and print the result.
// - Use readlineSync.questionInt() to read integer input from the user.
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================
// TASK: Prime Number Checker (Alternative Version)
// ------------------------------------------------------------
// This program checks whether a given number is prime using a cleaner loop
// and early exit for efficiency.
// ------------------------------------------------------------

const readlineSync = require('readline-sync');

// Function to determine if a number is prime
function isPrime(num) {
  // Handle numbers less than 2
  if (num < 2) {
    return false;
  }

  // Check divisibility from 2 up to num - 1
  for (let divisor = 2; divisor < num; divisor++) {
    if (num % divisor === 0) {
      return false; // Found a divisor, not prime
    }
  }

  return true; // No divisors found, number is prime
}

// Main function
function main() {
  const number = readlineSync.questionInt('Enter a number: ');

  const result = isPrime(number)
    ? `${number} is a prime number.`
    : `${number} is NOT a prime number.`;

  console.log(result);
}

// Run the program
main();


