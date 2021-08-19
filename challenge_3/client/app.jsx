import React from 'react';
import ReactDOM, { render } from 'react-dom';
import ScoreBoard from './components/scoreboard.jsx';
import PlayerUI from './components/PlayerUI.jsx'
import Board from './components/Board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frame: 0,
      value: 0
    }
    this.setScore = this.setScore.bind(this);
  }

  setScore (value) {
    console.log('SUCCESS', value);
    this.setState ({
      value: parseInt(value),
      frame: this.state.frame + 1
    })
  }


  render () {
    return (
      <div>
      <div>
        <h1 style={{textAlign: "center"}}>LETS BOWL</h1>
      </div>
      <div style={{display:"flex", justifyContent:"space-between"}}>
      <div style={{marginLeft: "10%"}}><PlayerUI score = {this.setScore}/></div>
      <div style={{marginRight: "10%"}}><ScoreBoard score = {this.state.value} frame = {this.state.frame}/></div>
      </div>
      <br></br><br></br>
      <div><Board state = {this.state}/></div>
      </div>
    )
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));

