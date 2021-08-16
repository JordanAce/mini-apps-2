import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Pin1 from './components/Pin1.jsx';
import Pin2 from './components/Pin2.jsx';
import Pin3 from './components/Pin3.jsx';
import Pin4 from './components/Pin4.jsx';
import Pin5 from './components/Pin5.jsx';
import Pin6 from './components/Pin6.jsx';
import Pin7 from './components/Pin7.jsx';
import Pin8 from './components/Pin8.jsx';
import Pin9 from './components/Pin9.jsx';
import Pin10 from './components/Pin10.jsx';

const App = () => {
  return (
    <div>
    <div>
      <h1 style={{textAlign: "center"}}>LETS BOWL</h1>
    </div>
    <div style={{display:"flex", justifyContent:"center"}}>
      <span><Pin7 /></span><span><Pin8 /></span><span><Pin9 /></span><span><Pin10 /></span>
    </div><br></br>
    <div style={{display:"flex", justifyContent:"center"}}>
      <span><Pin4 /></span><span><Pin5 /></span><span><Pin6/></span>
    </div><br></br>
    <div style={{display:"flex", justifyContent:"center"}}>
      <span><Pin2 /></span><span><Pin3 /></span>
    </div><br></br>
    <div style={{display:"flex", justifyContent:"center"}}>
      <span><Pin1 /></span>
    </div>
    </div>

  )
}

ReactDOM.render(<App />, document.getElementById("app"));

