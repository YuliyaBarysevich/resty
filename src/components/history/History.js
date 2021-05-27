import React from 'react';
import './history.scss'


const History = (props) => {
  return (
    <section className="history">
      <h2>History</h2>
      <ul>
        {props.history.map((item, idx) => {
          return(
            <li key={idx}>{item}</li>
          )
        })}
      </ul>
    </section>
  )
}



export default History;