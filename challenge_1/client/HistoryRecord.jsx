import React from 'react'

const HistoryRecord = (props) => (
  <div>
     {props.records.data.map((event, i) => (
        <div key = {i}>
          <p>{event.date}</p>
          <p>{event.description}</p>
         </div>
     ))}
  </div>
)

export default HistoryRecord