import React from 'react';
import Row from './Row'
import {createBoard} from '../Board.js'


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
  }


  componentDidMount () {
    this.init();
    createBoard();
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

