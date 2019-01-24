import { _getUsers } from '../utils/_DATA.js'
import { _getQuestions } from '../utils/_DATA.js'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'

const AUTHED_ID = 'tylermcginnis'

function getInitialData(){
  var users = _getUsers()
  var questions = _getQuestions()
  return { users, questions }
}
export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}
