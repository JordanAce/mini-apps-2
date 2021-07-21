import React from 'react'
import axios from 'axios'
import HistoryRecord from './HistoryRecord.jsx'

class HistoryFetcher extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
    }

  componentDidMount() {
    axios.get(`http://localhost:3000/events?q=${this.props.text}&_limit=20`)
    .then(data => this.setState({data}))
    .catch((error) => {
      console.log('Error Getting Events', error)
    })
  }

  render() {
    return (
    <div>
      {this.state.data && (
        <HistoryRecord records = {this.state.data} />
      )}
      </div>
    )
  }
}



export default HistoryFetcher;