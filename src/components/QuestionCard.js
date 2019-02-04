import React, { Component } from 'react';
import { connect } from 'react-redux';
import './../App.css';
import { handleSaveAnswer } from '../actions/questions'


class QuestionCard extends Component {
  handleVote = (optionNum) => {
    var answer = (optionNum === 1) ? 'optionOne' : 'optionTwo'
    const { dispatch, questionId, authedUser } = this.props
    dispatch(handleSaveAnswer({
      authedUser,
      questionId,
      answer
    }))
  }
  render() {
    const { question } = this.props;
    return (
      <li className="cardOutline globalFont">
        <div>Question Id: {question.id}</div>
        <button value="1" onClick={(e) => {this.handleVote(1)}}>{question.optionOne.text}</button>
        <div>OptionOne votes: {question.optionOne.votes.length}</div>
        <button value="2" onClick={(e) => {this.handleVote(2)}}>{question.optionTwo.text}</button>
        <div>OptionTwo votes: {question.optionTwo.votes.length}</div>
      </li>
    )
  }
}

function mapStateToProps( { questions, authedUser }, { questionId } ) {
  var question = questions[questionId]
  return {
    questionId,
    question,
    authedUser,
  }
}

export default connect(mapStateToProps)(QuestionCard)
