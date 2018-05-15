import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.generateLicense = this.generateLicense.bind(this)
    this.availableCharacters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.state = {
      license: '',
    }
  }

  generateLicense() {
    let licenseKey = ''
    for (let i = 0 ; i < 16 ; i++) {
      licenseKey += this.availableCharacters[Math.floor((Math.random() * this.availableCharacters.length) + 0)];
    }
    console.log('licenseKey', licenseKey)
    this.setState({
      license: licenseKey.match(/.{4}/g).join('-'),
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" onClick={this.generateLicense}/>
          <h1 className="App-title">Welcome to React</h1>
          {this.state.license}
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
