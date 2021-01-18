import { getUser } from "../utils/api";
export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const UPDATE_AUTHEDUSER_VOTE = "UPDATE_AUTHEDUSER_VOTE";

// Ask if this is OK????
export function setAuthedUser(id) {
  return (dispatch) => {
    return getUser(id).then((user) => {
      dispatch({
        type: SET_AUTHED_USER,
        user,
      });
    });
  };
}

export function updateAuthedUserVote(questionId, option) {
  return {
    type: UPDATE_AUTHEDUSER_VOTE,
    questionId,
    option,
  };
}
