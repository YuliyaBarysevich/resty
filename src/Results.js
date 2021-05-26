import React from 'react';


class Results extends React.Component {


  render(){
    return(
      <section className="results">
        <div>
        <pre>{ JSON.stringify(this.props.results, null, 2) }</pre>
        </div>
      </section>
    )
  }
}

export default Results;










