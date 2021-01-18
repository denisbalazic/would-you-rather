export const RECEIVE_USERS = "RECEIVE_USERS";
export const UPDATE_USER_VOTE = "UPDATE_USER_VOTE";

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
