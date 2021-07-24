import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import ChartView from './ChartView.jsx'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: [],
      price: [],
      showChart: false
    }
  }

  componentDidMount () {
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2021-01-01&end=2021-03-01')
    .then((data) => {
      console.log('BITCOIN PRICE', data.data);
      this.setState({
        date: Object.keys(data.data.bpi),
        price: Object.values(data.data.bpi),
        showChart: true
      })
    })
    .catch((error) => {
      console.log('Error Retrieving Bitcoin prices ', error);
    })
  }


  render() {
    console.log(this.state)
      return (
        <div>
        <div>
        {this.state.showChart ? <ChartView data = {this.state} /> : null}
        </div>
        <div>
        <h4 style = {{textAlign: "center"}}>Powered by <a href={'https://www.coindesk.com/price/bitcoin'}>CoinDesk</a></h4>
        </div>
        </div>
      )
  }
}

ReactDOM.render(<App />, document.getElementById("app"))
