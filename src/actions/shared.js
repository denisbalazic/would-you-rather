import { getInitialData } from "../utils/api";
import { receiveQuestions } from "../actions/questions";
import { receiveUsers } from "../actions/users";
import { setAuthedUser } from "../actions/authedUser";

const AUTHED_ID = "denis"

expoort function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
    .then(({questions, users }) => {
      dispatch(receiveQuestions(questions))
      dispatch(receiveUsers(users))
      dispatch(setAuthedUser(AUTHED_ID))
    })
  }
}
