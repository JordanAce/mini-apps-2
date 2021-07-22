import React from 'react'
import axios from 'axios'
import HistoryRecord from './HistoryRecord.jsx'
import ReactPaginate from 'react-paginate'
import './styles.css'


class HistoryFetcher extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 0,
      // offset: 0,
      // perPage: 10,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
    this.queryData = this.queryData.bind(this);
    }

  handlePageClick = (e) => {
    console.log('Click Registered');
    const selected = e.selected;
    // const offset = selected * this.state.perPage;
    this.setState({
      currentPage: selected
      // offset: offset
    }, () => {
      this.queryData();
    });
  }

  queryData() {
    axios.get(`http://localhost:3000/events?q=${this.props.text}&_page=${this.state.currentPage}&_limit=10`)
    .then((data) => {
      this.setState({
        data
      })})
    .catch((error) => {
      console.log('Error Getting Events', error)
    })
  }

  componentDidMount () {
    this.queryData();
  }



  render() {
    return (
    <div>
      <div>
      {this.state.data && (
        <HistoryRecord records = {this.state.data}/>
        )}
      </div>
      <div>
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
    </div>
    )
  }
}



export default HistoryFetcher;