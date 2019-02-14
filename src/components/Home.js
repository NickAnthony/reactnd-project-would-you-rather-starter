import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionCard from './QuestionCard'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayAnswered: false,
    }
  }

  showAnsweredQuestions = (result) => {
    this.setState({
      displayAnswered: result
    })
  }
  render() {
    return (
      <React.Fragment>
        <div  className='globalFont'>
          <h3>Home</h3>
          <div className="homeHeader">
            <button
              onClick={(e) => this.showAnsweredQuestions(false)}>
              Unanswered Questions
            </button>
            <button
              onClick={(e) => this.showAnsweredQuestions(true)}>
              Answered Questions
            </button>
          </div>
          { this.state.displayAnswered
            ?
            <React.Fragment>
              <h4>UNANSWERED QUESTIONS</h4>
              <ul className='cardColumn'>
                {this.props.unansweredQIds.map((id) =>
                  <QuestionCard questionId={id} key={id}/>
                )}
              </ul>
            </React.Fragment>
            :
            <React.Fragment>
              <h4>ANSWERED QUESTIONS</h4>
              <ul className='cardColumn'>
                {this.props.answeredQIds.map((id) =>
                  <QuestionCard questionId={id} key={id}/>
                )}
              </ul>
            </React.Fragment>
          }
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
