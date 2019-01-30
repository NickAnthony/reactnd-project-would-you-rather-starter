import React, { Component } from 'react';
import { connect } from 'react-redux';
import './../App.css';

class QuestionCard extends Component {
  render() {
    const { question } = this.props;
    return (
      <li className="cardOutline globalFont">
        <div>Question Id: {question.id}</div>
        <button>{question.optionOne.text}</button>
        <button>{question.optionTwo.text}</button>
      </li>
    )
  }
}

function mapStateToProps( { questions, authedUser }, { questionId } ) {
  var question = questions[questionId]
  return {
    question,
    authedUser,
  }
}

export default connect(mapStateToProps)(QuestionCard)
