
//Traverse Board
export const traverse = (matrix, callback) => {
  matrix.forEach((row, rowIndex) => ((col, colIndex) => callback(matrix, rowIndex, colIndex)));
}