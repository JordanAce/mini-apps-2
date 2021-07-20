import React from 'react'
import SearchForm from './SearchForm.jsx'

class App extends React.Component {

  render() {
    return (
      <div>
    <h1 style={{textAlign:"center"}}>Historical Events Finder</h1>
    <SearchForm />
    </div>
    )
  }
}

export default App;

