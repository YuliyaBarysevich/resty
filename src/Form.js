import React from 'react';


class Form extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      method: 'get',
      input: 'nothing to see yet',
    }
  }

  handleChange = e => {
    let input = e.target.value;
    this.setState({ input })
  }

  handleClick = e => {
    e.preventDefault();
    let method = e.target.value;
    this.setState({ method })
  }

  handleSubmit = async e => {
    e.preventDefault();

    let raw = await fetch(this.state.input);
    let data = await raw.json();
    let headers = raw.headers

    console.log("headers", headers)
    let count = data.count
    let results = data.results
    this.props.handleForm(count,results)
  }

  render(){
    return (
      <>
        <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} />
        <button type="submit">GO!</button> 
        <br />
        <input type="radio" id="get" name="method" value="get" onClick={this.handleClick}/>
        <label htmlFor="get">GET</label>
        <input type="radio" id="post" name="method" value="post" onClick={this.handleClick}/>
        <label htmlFor="post">POST</label>
        <input type="radio" id="put" name="method" value="put" onClick={this.handleClick}/>
        <label htmlFor="put">PUT</label>
        <input type="radio" id="delete" name="method" value="delete" onClick={this.handleClick}/>
        <label htmlFor="delete">DELETE</label>
      </form>
      </>
      
    )
  }
}

export default Form;