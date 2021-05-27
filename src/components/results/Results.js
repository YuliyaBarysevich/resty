import React from 'react';
import { If, Then, Else } from 'react-if';
import load from './load.gif'
import './results.scss'


class Results extends React.Component {


  render(){
    return(
      <section className="results">
        <If condition={this.props.loading}>
          <Then>
            <img src={load} />
          </Then>
          <Else>
          <h2>Results</h2>
          <div>
        <pre>{ JSON.stringify(this.props.results, null, 2) }</pre>
        </div>
          </Else>
        </If>
      </section>
    )
  }
}

export default Results;










