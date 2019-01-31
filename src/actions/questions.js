import { saveQuestion, saveQuestionAnswer } from './../utils/api'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_ANSWER = 'SAVE_ANSWER'


export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}
export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    // dispatch(showLoading())
    return saveQuestion(optionOneText, optionTwoText, authedUser)
      .then((question) => dispatch(addQuestion(question)))
      //.then(() => dispatch(hideLoading()))
  }
}

export function saveAnswer(question) {
  return {
    type: SAVE_ANSWER,
    // TODO: Add something here
  }
}
export function handleSaveAnswer(questionId, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    // dispatch(showLoading())
    //_saveQuestion
    return saveQuestionAnswer(authedUser, questionId, answer)
      .then((question) => dispatch(saveAnswer(question)))
      //.then(() => dispatch(hideLoading()))
  }
}

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}
