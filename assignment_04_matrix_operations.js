// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================
const readlineSync = require('readline-sync');

// Function to read a matrix from the user
function readMatrix(rows, cols) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    const rowInput = readlineSync.question(`Enter row ${i + 1}: `);
    const row = rowInput.split(' ').map(Number);
    matrix.push(row);
  }
  return matrix;
}

// Function to display a matrix neatly
function displayMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(' '));
  }
}

// PART A: Transpose a matrix
function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const transposed = [];

  for (let i = 0; i < cols; i++) {
    transposed[i] = [];
    for (let j = 0; j < rows; j++) {
      transposed[i][j] = matrix[j][i];
    }
  }
  return transposed;
}

// PART B: Add two matrices
function addMatrices(matrixA, matrixB) {
  const rows = matrixA.length;
  const cols = matrixA[0].length;
  const result = [];

  for (let i = 0; i < rows; i++) {
    result[i] = [];
    for (let j = 0; j < cols; j++) {
      result[i][j] = matrixA[i][j] + matrixB[i][j];
    }
  }
  return result;
}

// PART C: Multiply two matrices
function multiplyMatrices(matrixA, matrixB) {
  const rowsA = matrixA.length;
  const colsA = matrixA[0].length;
  const rowsB = matrixB.length;
  const colsB = matrixB[0].length;

  if (colsA !== rowsB) {
    console.log('Error: Number of columns in A must equal number of rows in B.');
    return null;
  }

  const result = [];
  for (let i = 0; i < rowsA; i++) {
    result[i] = [];
    for (let j = 0; j < colsB; j++) {
      let sum = 0;
      for (let k = 0; k < colsA; k++) {
        sum += matrixA[i][k] * matrixB[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
}

// MAIN PROGRAM
function main() {
  console.log('--- MATRIX OPERATIONS ---');
  const rows = readlineSync.questionInt('Enter number of rows: ');
  const cols = readlineSync.questionInt('Enter number of columns: ');

  if (rows <= 0 || cols <= 0) {
    console.log('Error: Rows and columns must be positive integers.');
    return;
  }

  console.log('\nEnter Matrix A:');
  const matrixA = readMatrix(rows, cols);

  console.log('\nOriginal Matrix A:');
  displayMatrix(matrixA);

  console.log('\nTransposed Matrix:');
  const transposed = transposeMatrix(matrixA);
  displayMatrix(transposed);

  console.log('\nEnter Matrix B (same size as A for addition):');
  const matrixB = readMatrix(rows, cols);

  console.log('\nSum of A and B:');
  const sumMatrix = addMatrices(matrixA, matrixB);
  displayMatrix(sumMatrix);

  console.log('\nEnter Matrix C (for multiplication):');
  const rowsC = readlineSync.questionInt('Enter number of rows for Matrix C: ');
  const colsC = readlineSync.questionInt('Enter number of columns for Matrix C: ');
  const matrixC = readMatrix(rowsC, colsC);

  console.log('\nProduct of A and C:');
  const productMatrix = multiplyMatrices(matrixA, matrixC);
  if (productMatrix) displayMatrix(productMatrix);
}

main();


