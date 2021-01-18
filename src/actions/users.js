export const RECEIVE_USERS = "RECEIVE_USERS";
export const UPDATE_USER_VOTE = "UPDATE_USER_VOTE";
export const UPDATE_USER_QUESTIONS = "UPDATE_USER_QUESTIONS";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function updateUserVote(authedUserId, questionId, option) {
  return {
    type: UPDATE_USER_VOTE,
    authedUserId,
    questionId,
    option,
  };
}

export function updateUserQuestions(questionId, userId) {
  return {
    type: UPDATE_USER_QUESTIONS,
    userId,
    questionId,
  };
}
