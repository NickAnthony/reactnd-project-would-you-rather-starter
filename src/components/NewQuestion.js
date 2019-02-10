import React, { Component } from 'react';
import { connect } from 'react-redux';
import './../index.css'
import { handleAddQuestion } from './../actions/questions'

class NewQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newQOptionOne: '',
      newQOptionTwo: '',
    }
  }

  handleUpdateQ = (newVal, stateId) => {
    this.setState((state) => {
      return {
        ...state,
        [stateId]: newVal
      };
    });
  }

  handleSaveQ = () => {
    const { dispatch } = this.props
    dispatch(handleAddQuestion(
      this.state.newQOptionOne,
      this.state.newQOptionTwo
    ))
  }

  render() {
    return (
      <div className="cardoutline NewQ">
        <h3> New Question </h3>
        <div className="padding">
          Would you rather...
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
        <button
          className="myButton"
          onClick={(e) => this.handleSaveQ()}>
          Save Question
        </button>
      </div>
    )
  }
}

export default connect()(NewQuestion)
