import React from 'react';
import './form.scss';
import axios from 'axios'


class Form extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      method: '',
      input: '',
      show: false
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
    let history = [];
    // let raw = await fetch(this.state.input);
    // let data = await raw.json();
    // let count = data.count
    // let results = data.results
   this.props.toggleLoading()
   await axios({
      "method": this.state.method, 
      "url": this.state.input
    })
      .then(data => {
        console.log(data)
        let count = data.count
        let results = data.data.results
        history.push(`${this.state.method} ${this.state.input}`)
        this.props.handleForm(count, results, history)
        
      })

    //handle history
    // history.push(`${this.state.method} ${this.state.input}`)
    localStorage.setItem('history', history);
    let dataFromLS = localStorage.getItem('history')
    // this.props.handleForm(count, results, history)
    
  }

  render(){
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <button type="submit">GO!</button> 
          <br />
            <label>
              <input onClick={this.handleClick} type="radio" value="GET" name="method" />
              <span>GET</span>
            </label>
            <label>
              <input onClick={this.handleClick} type="radio" value="POST" name="method" />
              <span>POST</span>
            </label>
            <label>
              <input onClick={this.handleClick} type="radio" value="PUT" name="method" />
              <span>PUT</span>
            </label>
            <label>
              <input onClick={this.handleClick} type="radio" value="DELETE" name="method" />
              <span>DELETE</span>
            </label>
      </form>
      </>
      
    )
  }
}

export default Form;