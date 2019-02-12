import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import NewQuestion from './components/NewQuestion'
import { handleInitialData } from './actions/shared';

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="App">
        <NavBar location='/NavBar'/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/create' component={NewQuestion}/>
      </div>
    );
  }
}

export default withRouter(connect()(App));
