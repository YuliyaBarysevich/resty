import React from 'react';
import './history.scss'


class History extends React.Component {
  render(){
    let historyData = this.props.history.map((item, i) =>{
      return <li key={i}>{item}</li>
    })
    return (
      <section className="history">
        <h2>History</h2>
        <ul>
          {historyData}
        </ul>
      </section>
    )

  }
}



export default History;