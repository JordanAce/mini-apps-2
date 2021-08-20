import React from 'react'
import Piece from './Piece'

class Row extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stfu:true
    }
  }

  render () {
    return (
      <tr>
        {this.props.board.map((piece, i) =>
        <Piece piece = {piece} key = {i}/>
        )}
      </tr>
    )
  }
}

export default Row;