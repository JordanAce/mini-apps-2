import React from 'react';


class PlayerUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: "0"};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault;
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <h3 style={{textAlign: "left", marginLeft: "10%", width: "100%"}}># of pins hit</h3>
            <select value={this.state.value} onChange={this.handleChange} style={{backgroundColor: "tan"}}>
            <option value = "1">1</option>
            <option value = "2">2</option>
            <option value = "3">3</option>
            <option value = "4">4</option>
            <option value = "5">5</option>
            <option value = "6">6</option>
            <option value = "7">7</option>
            <option value = "8">8</option>
            <option value = "9">9</option>
            <option value = "10">10</option>
          </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>

    )
  }
}

export default PlayerUI;