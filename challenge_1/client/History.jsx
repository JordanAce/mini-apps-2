import React from 'react'

class History extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentEvents: {}
    }
  }
  componentDidMount() {
    axios.get(`http://localhost:3000/events?category2=${this.props.text}`)
    .then((events) => {
      this.setState ({
        currentEvents: events
      })
    })
    .catch((error) => {
      console.log('Error Getting Events', events)
    })
  }

  render() {
    return (
      <div>
        {/* {this.state.currentEvents} */}
      </div>
    )
  }
}



export default History;