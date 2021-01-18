import { SET_AUTHED_USER, UPDATE_AUTHEDUSER_VOTE } from "../actions/authedUser";

export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.user;
    case UPDATE_AUTHEDUSER_VOTE:
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.questionId]: action.option,
        },
      };
    default:
      return state;
  }
}
