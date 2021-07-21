import React from 'react'
import HistoryFetcher from './HistoryFetcher.jsx'

class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      showHistory: false
    };
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
    this.setState({
      showHistory: true
    })
    event.preventDefault();

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
      {this.state.showHistory ? <HistoryFetcher text = {this.state.value} /> : null}
    </div>
    )
  }
}

export default SearchForm;