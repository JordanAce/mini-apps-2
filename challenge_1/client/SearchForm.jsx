import React from 'react'
import History from './History.jsx'

class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    console.log(`Searching for ${this.state.value}`)
    event.preventDefault();
    return (
      <History text = {this.state.value} />
    )
  }





  render() {

    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          <label>
            Search:
            <input type="text" value = {this.state.value} onChange = {this.handleChange} />
          </label>
          <input type="submit" value="Submit"></input>
        </form>
    </div>
    )
  }
}

export default SearchForm;