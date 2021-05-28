import React from 'react';
import { If, Then } from 'react-if';
import './form.scss';
// import axios from 'axios'


class Form extends React.Component {
  //   constructor(props) {
  //   super(props);
  //   this.state = {
  //     method: '',
  //     input: '',
  //     show: false
  //   }
  // }

  // handleChange = e => {
  //   let input = e.target.value;
  //   this.setState({ input })
  // }

  // handleClick = e => {
  //   e.preventDefault();
  //   let method = e.target.value;
  //   // console.log(method)
  //   this.setState({ method })
  // }

  // handleSubmit = async e => {
  //   e.preventDefault();
  //   // let history = [];
  //   // let raw = await fetch(this.state.input);
  //   // let data = await raw.json();
  //   // let count = data.count
  //   // let results = data.results
  //   this.props.toggleLoading()
  //    const request = {
  //     method: this.state.method,
  //     url: this.state.input
  //    }

  //    let raw = await axios(request);
  //    let data = raw.data;
  //    let results = data.results;
  //    let count = data.count
  //    console.log(request)
  // //  await axios({
  // //     "method": this.state.method, 
  // //     "url": this.state.input
  // //   })
  // //     .then(data => {
  // //       console.log(data)
  // //       
  // //       let results = data.data.results
  // //       history.push(`${this.state.method} ${this.state.input}`)
        
        
  // //     })
  //     this.props.handleForm(count, results, request)
  //     this.props.toggleLoading()
    
  // }

  render(){
    return (
      <>
        <form onSubmit={this.props.handleSubmit}>
          <input type="text" onChange={this.props.handleChange} />
          <button type="submit">GO!</button> 
          <br />
              <input onClick={this.props.handleClick} type="button" value="GET" name="method" />
              <input onClick={this.props.handleClick} type="button" value="POST" name="method" />
              <input onClick={this.props.handleClick} type="button" value="PUT" name="method" />
              <input onClick={this.props.handleClick} type="button" value="DELETE" name="method" />
              <If condition={this.props.method === 'POST' || this.props.method === 'PUT'}>
                <Then>
                  <div>
                    <textarea cols='60' rows='5' placeholder='enter body'></textarea>
                  </div>
                </Then>
              </If>

      </form>
      </>
      
    )
  }
}

export default Form;