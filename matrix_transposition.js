const transpose = function(matrix) {

  // Create an empty array
  let result = [];

  // Loop thru each column of the first row
  for (let col = 0; col < matrix[0].length; col++) {
    let newRow = [];
    // Loop thru each row of the org matrix
    for (let row = 0; row < matrix.length; row++) {
      newRow.push(matrix[row][col]);
    }
    result.push(newRow);
  }
  return result;
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

printMatrix(
  transpose([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ])
);

console.log("----");

printMatrix(
  transpose([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

console.log("----");

printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));