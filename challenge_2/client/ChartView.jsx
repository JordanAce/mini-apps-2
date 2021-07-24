import React from 'react'
import Chart from 'chart.js/auto'

class ChartView extends React.Component {

  constructor(props) {
    super(props)
    this.renderChart = this.renderChart.bind(this);
  }

  componentDidMount ()  {
    this.renderChart();
  }

  renderChart() {
    const {date, price} = this.props.data;
    let ctx = document.getElementById("myChart");
    console.log(this.props.data)
    let myChart = new Chart (ctx, {
      type: 'line',
      data: {
        labels: date,
        datasets: [{
          label: 'Price in USD',
          data: price,
          fill: true,
          backgroundColor: 'green',
          borderColor: 'black',
          borderWidth: 1.5
        }]
      }
    });
  }


render() {
  return(
    <div>
      <canvas id="myChart" ></canvas>
    </div>
  )
}

}

export default ChartView