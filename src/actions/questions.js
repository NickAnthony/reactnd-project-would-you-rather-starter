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
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser })
      .then((formattedQuestion) => {
        dispatch(addQuestion(formattedQuestion))
        // dispatch(hideLoading()
      })
  }
}

export function saveAnswerToState({ questionId, authedUser, answer }) {
  return {
    type: SAVE_ANSWER,
    questionId,
    authedUser,
    answer
  }
}
export function handleSaveAnswer(answerInfo) {
  return (dispatch) => {
    // dispatch(showLoading())
    return saveQuestionAnswer(answerInfo)
      .catch((e) => {
        console.warn("Error in saving answer ", e)
      })
      .then(() => {
        dispatch(saveAnswerToState(answerInfo))
        // dispatch(hideLoading())
      })
  }
}

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}
