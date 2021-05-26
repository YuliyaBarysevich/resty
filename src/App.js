import React from 'react';
import Form from './Form.js'
import Results from './Results.js'

import './header.scss';
import './form.scss';
import './footer.scss';

const Header = () => {
  return (
    <header>
      <h1>RESTy</h1>
    </header>
  )
}

const Footer = () => {
  return (
    <footer>
      <p>2021 Code Fellows</p>
    </footer>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      results: []
    }
  }

  handleForm = (count, results) => {
    this.setState({ count, results });
  }

  render(){
    return (
      <>
        <Header />
        <Form handleForm={this.handleForm} />
        <Results results={this.state.results} />
        <Footer />
      </>
    )
  }
}

export default App;

