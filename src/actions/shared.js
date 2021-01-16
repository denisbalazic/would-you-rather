import { getInitialData } from "../utils/api";
import { receiveQuestions } from "../actions/questions";
import { receiveUsers } from "../actions/users";
import { setAuthedUser } from "../actions/authedUser";

export const AUTHED_ID = "sarahedo";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ questions, users }) => {
      dispatch(receiveQuestions(questions));
      dispatch(receiveUsers(users));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}
