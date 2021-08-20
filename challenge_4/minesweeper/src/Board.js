import { traverse, checkOtherSquares} from './helpers';

const adjustSquares = (matrix, rowIndex, colIndex) => {
  let current = matrix[rowIndex][colIndex];
  const increaseNumber = (condition) => {
    if (condition) {
      current++;
      matrix[rowIndex][colIndex] = current;
    }
  }
  checkOtherSquares(matrix, rowIndex, colIndex, 'B', increaseNumber)
}
export const createBoard = () => {

  let matrix = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]

  let bombs = 10;

  while (bombs > 0) {
    let randomRow = Math.floor(Math.random() * (9 - 0 + 1) + 0);
    let randomCol = Math.floor(Math.random() * (9 - 0 + 1) + 0);
    console.log(randomRow, randomCol);
    if (matrix[randomRow][randomCol] !== 'B') {
      matrix[randomRow][randomCol] = 'B';
      bombs--;
    }
  }

  console.log(matrix);


  // traverse(matrix, adjustSquares);
  // return matrix;
}
