import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newQQuestion: '',
      newQOptionOne: '',
      newQOptionTwo: '',
    }
  }

  handleUpdateQ = (newVal, stateId) => {
    console.log(newVal, stateId)
    this.setState((state) => {
      return {
        ...state,
        [stateId]: newVal
      };
    });
  }

  render() {
    return (
      <div className="cardoutline NewQ">
        <h3> New Question </h3>
        <div className="padding">
          Question:
          <input
            id='newQQuestion'
            value={this.state.newQQuestion}
            onChange={(e) => this.handleUpdateQ(e.target.value, e.target.id)}
            />
        </div>
        <div className="NewQOptions">
          <div className="padding">
            Option One:
            <input
              id='newQOptionOne'
              value={this.state.newQOptionOne}
              onChange={(e) => this.handleUpdateQ(e.target.value, e.target.id)}
              />
          </div>
          <div className="padding">
            Option Two:
            <input
              id='newQOptionTwo'
              value={this.state.newQOptionTwo}
              onChange={(e) => this.handleUpdateQ(e.target.value, e.target.id)}
              />
          </div>
        </div>
      </div>
    )
  }
}


export default connect()(NewQuestion)
