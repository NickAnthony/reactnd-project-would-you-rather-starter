import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionCard extends Component {
  render() {
    return (
      <li>
        <div>Question Id: {this.props.question.id}</div>
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
