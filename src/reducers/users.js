import { RECEIVE_USERS, UPDATE_USER_VOTE } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case UPDATE_USER_VOTE:
      return {
        ...state,
        [action.authedUserId]: {
          ...state[action.authedUserId],
          answers: {
            ...state[action.authedUserId].answers,
            [action.questionId]: action.option,
          },
        },
      };
    default:
      return state;
  }
}
