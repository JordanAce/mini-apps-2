import React from 'react';
import ReactDOM from 'react';

class App extends React.Component {


  render() {
    return (
      <h1>
        Cryptocurrency Chart
      </h1>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"))
