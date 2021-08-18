import React from 'react';
import Pin1 from './Pin1.jsx';
import Pin2 from './Pin2.jsx';
import Pin3 from './Pin3.jsx';
import Pin4 from './Pin4.jsx';
import Pin5 from './Pin5.jsx';
import Pin6 from './Pin6.jsx';
import Pin7 from './Pin7.jsx';
import Pin8 from './Pin8.jsx';
import Pin9 from './Pin9.jsx';
import Pin10 from './Pin10.jsx';

class Board extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount () {
  }

  render() {
    console.log(this.props.state.value)
  return (
      <div>
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
}

export default Board;