import React from 'react';
import Header from './header/Header.js'
import Footer from './footer/Footer.js'
import Form from './form/Form.js'
import Results from './results/Results.js'
import History from './history/History.js'
import './style.scss'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      results: [],
      history: [],
      loading: false
    }
  }

  handleForm = (count, results, history) => {
    this.setState({ count, results, history });
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading })
  }

  render(){
    return (
      <>
        <Header />
        <Form handleForm={this.handleForm} toggleLoading={this.toggleLoading}/>
        <div className="main">
          <History history={this.state.history}/>
          <Results results={this.state.results} toggleLoading={this.toggleLoading}/>
        </div>
        <Footer />
      </>
    )
  }
}

export default App;

