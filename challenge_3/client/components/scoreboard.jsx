import React from 'react';

class ScoreBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScore: 0,
      scoreboard: [],
      currentTotal: 0
    }
    this.updateScoreboard = this.updateScoreboard.bind(this);
  }

  updateScoreboard() {
    this.setState({
      currentScore: this.props.score,
      scoreboard:[...this.state.scoreboard, this.props.score],
      currentTotal: parseInt(this.state.currentTotal + this.props.score)
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.frame !== this.props.frame)
    {
      console.log('Props Changed In Scoreboard');

      this.updateScoreboard();
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
            <th style = {{width: "100px"}}>TOTAL</th>
          </tr>
          <tr>
            <th>{this.state.scoreboard[0]}</th>
            <th>{this.state.scoreboard[1]}</th>
            <th>{this.state.scoreboard[2]}</th>
            <th>{this.state.scoreboard[3]}</th>
            <th>{this.state.scoreboard[4]}</th>
            <th>{this.state.scoreboard[5]}</th>
            <th>{this.state.scoreboard[6]}</th>
            <th>{this.state.scoreboard[7]}</th>
            <th>{this.state.scoreboard[8]}</th>
            <th>{this.state.scoreboard[9]}</th>
            <th style = {{width: "100px"}}>{this.state.currentTotal}</th>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
}



export default ScoreBoard;