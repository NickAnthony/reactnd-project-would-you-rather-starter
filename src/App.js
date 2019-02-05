import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Home from './components/Home'
import NavBar from './components/NavBar'
import { handleInitialData } from './actions/shared'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Home/>
      </div>
    );
  }
}

export default connect()(App);
