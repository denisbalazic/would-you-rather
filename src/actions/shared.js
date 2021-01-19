import {
  getInitialData,
  saveQuestionAnswer,
  saveNewQuestion,
  authenticateUser,
} from "../utils/api";
import { receiveQuestions, updateQuestionVote, updateQuestions } from "../actions/questions";
import { receiveUsers, updateUserVote, updateUserQuestions } from "../actions/users";
import {
  setAuthedUser,
  updateAuthedUserVote,
  updateAuthedUserQuestions,
} from "../actions/authedUser";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ questions, users }) => {
      dispatch(receiveQuestions(questions));
      dispatch(receiveUsers(users));
    });
  };
}

export function handleLogin(username) {
  return (dispatch) => {
    return authenticateUser(username).then((user) => {
      dispatch(setAuthedUser(user));
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

export function handleNewQuestion(optionOneText, optionTwoText, authedUserId) {
  return (dispatch) => {
    return saveNewQuestion(optionOneText, optionTwoText, authedUserId).then((question) => {
      dispatch(updateAuthedUserQuestions(question.id));
      dispatch(updateUserQuestions(question.id, question.author));
      dispatch(updateQuestions(question));
    });
  };
}
