import React from 'react';

class ScoreBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frame: 0
    }
  }

  render () {
    return (
      <div>
        <h3 style={{textAlign:"right", marginRight: "25%"}}>SCOREBOARD</h3>
        <table>
          <tbody>
          <tr>
            <th style={{marginRight: "40%", marginLeft: "40%", border: "none"}}>FRAME</th>
          </tr>
          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>10</th>
          </tr>
          <tr>
            <th>0</th>
            <th>0</th>
            <th>0</th>
            <th>0</th>
            <th>0</th>
            <th>0</th>
            <th>0</th>
            <th>0</th>
            <th>0</th>
            <th>0</th>
          </tr>
          </tbody>

        </table>
      </div>
    )
  }
}

export default ScoreBoard;