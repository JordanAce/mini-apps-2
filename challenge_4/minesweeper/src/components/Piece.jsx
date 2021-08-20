import React from 'react';

class Piece extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stfu: true
    }
  }

  render () {
    return (
      <th>
        {this.props.piece}
      </th>
    )
  }
}



export default Piece;