export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export default function setAuthedUser (authedId) {
  return {
    type: SET_AUTHED_USER,
    authedId
  }
}
