import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import Main from './Main';

// https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
