import React from 'react';
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

class GetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      method: 'chosen method',
      input: 'nothing to see yet'
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

  handleSubmit = e => {
    e.preventDefault()
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} />
        <button type="submit">GO!</button> 
        <br />
        <input type="radio" id="get" name="method" value="get" onClick={this.handleClick}/>
        <label for="get">GET</label>
        <input type="radio" id="post" name="method" value="post" onClick={this.handleClick}/>
        <label for="post">POST</label>
        <input type="radio" id="put" name="method" value="put" onClick={this.handleClick}/>
        <label for="put">PUT</label>
        <input type="radio" id="delete" name="method" value="delete" onClick={this.handleClick}/>
        <label for="delete">DELETE</label>
      </form>
      <section>
        <p>{this.state.method}: {this.state.input}</p>
      </section>
      </div>
      
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <GetForm />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
