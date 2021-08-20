import React from 'react';
import Row from './Row'
import {traverse} from '../helpers';


class MineSweeperBoard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      board: []
    }
    this.init = this.init.bind(this);
  }

  init() {
    let newBoard = [];
    for (let i = 0; i < 10; i++) {
      let column = [];
      for (let j = 0; j < 10; j++) {
        column.push('')
      }
      newBoard.push(column);
    }
    this.setState({
      board:newBoard
    })

    let matrix = [
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0,0,0]
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

    // traverse(matrix, adjustSquares);
    // return matrix;
  }

  componentDidMount () {
    this.init();
  }

  render () {
    return (
      <table className = "center">
        <tbody>
          <tr>
            <th colSpan = "10" style = {{backgroundColor: "#0147f7", textAlign: "left", marginLeft: "10%"}}><img className = "bomb" src = "https://w7.pngwing.com/pngs/220/369/png-transparent-minesweeper-pro-classic-mine-sweeper-minesweeper-plus-likeminesweeper-bomb-game-computer-wallpaper-video-game.png" height = "20px" width = "20px" alt ="Mine Sweeper Bomb"></img>Minesweeper</th>
          </tr>
            {this.state.board.map((row, i) =>
              <Row key = {i} board = {this.state.board[i]}/>
            )}
        </tbody>
      </table>
    )
  }
}

export default MineSweeperBoard;

