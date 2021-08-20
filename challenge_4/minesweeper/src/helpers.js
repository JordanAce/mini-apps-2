
//Traverse Board
export const traverse = (matrix, callback) => {
  matrix.forEach((row, rowIndex) => ((col, colIndex) => callback(matrix, rowIndex, colIndex)));
}

//check adjacent squares for bombs
export const checkOtherSquares = (matrix, rowIndex, colIndex, target, callback) => {
  let conditions = [
    //top left
    (rowIndex > 0 && colIndex > 0 && matrix[rowIndex - 1][colIndex - 1] === target),
    //top-center
    (rowIndex > 0 && colIndex > 0 && matrix[rowIndex - 1][colIndex - 1] === target),
    //top-right
    (rowIndex > 0 && colIndex > 0 && matrix[rowIndex - 1][colIndex - 1] === target),
    //left
    (rowIndex > 0 && colIndex > 0 && matrix[rowIndex - 1][colIndex - 1] === target),
    //right
    (rowIndex > 0 && colIndex > 0 && matrix[rowIndex - 1][colIndex - 1] === target),
    //bottom-left
    (rowIndex > 0 && colIndex > 0 && matrix[rowIndex - 1][colIndex - 1] === target),
    //bottom-right
    (rowIndex > 0 && colIndex > 0 && matrix[rowIndex - 1][colIndex - 1] === target),
    //bottom-center
    (rowIndex > 0 && colIndex > 0 && matrix[rowIndex - 1][colIndex - 1] === target)

  ]
}