import React from 'react';
import axios from 'axios'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { If, Then } from 'react-if';
import Header from './header/Header.js'
import Footer from './footer/Footer.js'
import Form from './form/Form.js'
import Results from './results/Results.js'
import History from './history/History.js'
import Help from './help/Help.js'
import './reset.scss'
import './style.scss'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: '',
      count: 0,
      results: [],
      history: [],
      loading: false
    }
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading })
  }

  handleChange = e => {
    let url = e.target.value;
    this.setState({ url })
  }

  handleClick = e => {
    e.preventDefault();
    let method = e.target.value;
    // console.log(method)
    this.setState({ method })
  }

  handleSubmit = async e => {
    e.preventDefault();
  
    this.toggleLoading()
    let method = this.state.method;
    let url = this.state.url;
     const request = {
      method: this.state.method,
      url: this.state.url
     }

     let raw = await axios(request);
     let data = raw.data;
     let results = data.results;
     this.setState({ results })
    //  let count = data.count

      this.addToHistory(`${method} ${url}`)
      this.toggleLoading()
    
  }

  // handleForm = (count, results) => {
  //   this.setState({ count, results });
  // }

  addToHistory = req => {
    this.setState({ history: [...this.state.history, req] })
  }

  handleHistory = (method, url) => {
    this.setState({method, url})
  }


  render(){
    return (
      <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
          <Form url={this.state.url} method={this.state.method} toggleLoading={this.toggleLoading} handleChange={this.handleChange} handleClick={this.handleClick} handleSubmit={this.handleSubmit} />
          <If condition={this.state.results.length > 0}>
            <Then>
              <div className='main'>
                <History handleHistory={this.handleHistory} history={this.state.history}/>
                <Results results={this.state.results} toggleLoading={this.toggleLoading}/> 
              </div>
            </Then>
          </If>
          </Route>
          <Route exact path="/history">
            <History handleHistory={this.handleHistory} history={this.state.history}/>
          </Route>
          <Route exact path="/help">
            <Help />
          </Route>
        </Switch>
        <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

