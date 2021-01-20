export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const UPDATE_AUTHEDUSER_VOTE = "UPDATE_AUTHEDUSER_VOTE";
export const UPDATE_AUTHEDUSER_QUESTIONS = "UPDATE_AUTHEDUSER_QUESTIONS";

export function setAuthedUser(user) {
  return {
    type: SET_AUTHED_USER,
    user,
  };
}

export function updateAuthedUserVote(questionId, option) {
  return {
    type: UPDATE_AUTHEDUSER_VOTE,
    questionId,
    option,
  };
}

export function updateAuthedUserQuestions(questionId) {
  return {
    type: UPDATE_AUTHEDUSER_QUESTIONS,
    questionId,
  };
}
