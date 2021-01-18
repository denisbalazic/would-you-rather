import { getInitialData, saveQuestionAnswer } from "../utils/api";
import { receiveQuestions, updateQuestionVote } from "../actions/questions";
import { receiveUsers, updateUserVote } from "../actions/users";
import { setAuthedUser, updateAuthedUserVote } from "../actions/authedUser";

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

export function handleVote(authedUserId, questionId, option) {
  return (dispatch) => {
    return saveQuestionAnswer(authedUserId, questionId, option).then(() => {
      dispatch(updateAuthedUserVote(questionId, option));
      dispatch(updateUserVote(authedUserId, questionId, option));
      dispatch(updateQuestionVote(authedUserId, questionId, option));
    });
  };
}
