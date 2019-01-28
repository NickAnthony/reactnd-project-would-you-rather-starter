import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <h3>Home</h3>
        <div>
          <h3>ALL QUESTIONS</h3>
          <ul>
            {this.props.questionIds.map((id) =>
              <li key={id}>
                <div>Ans Question Id: {id}</div>
              </li>
            )}
          </ul>
          <h4>UNANSWERED QUESTIONS</h4>
          <ul>
            {this.props.unansweredQIds.map((id) =>
              <li key={id}>
                <div>Unans Question Id: {id}</div>
              </li>
            )}
          </ul>
          <h4>ANSWERED QUESTIONS</h4>
          <ul>
            {this.props.answeredQIds.map((id) =>
              <li key={id}>
                <div>Ans Question Id: {id}</div>
              </li>
            )}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}


function mapStateToProps( { questions, authedUser } ){
  var unansweredQIds = Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
      .filter((qId) => (
        questions[qId].optionOne.votes.indexOf(authedUser) < 0
        &&
        questions[qId].optionTwo.votes.indexOf(authedUser) < 0
      ))
  var answeredQIds = Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
      .filter((qId) => (
        questions[qId].optionOne.votes.indexOf(authedUser) > -1
        ||
        questions[qId].optionTwo.votes.indexOf(authedUser) > -1
      ))
  console.log(questions)
  return {
    // answeredQIds: Object.keys(answeredQs)
    //   .sort((a,b) => answeredQs[b].timestamp - answeredQs[a].timestamp),
    // unansweredQIds: Object.keys(unansweredQs)
    //   .sort((a,b) => unansweredQs[b].timestamp - unansweredQs[a].timestamp),
    questionIds: Object.keys(questions)
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    unansweredQIds,
    answeredQIds,
  };
}
export default connect(mapStateToProps)(Home);
