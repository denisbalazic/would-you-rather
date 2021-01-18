import { RECEIVE_USERS, UPDATE_USER_VOTE, UPDATE_USER_QUESTIONS } from "../actions/users";

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
    case UPDATE_USER_QUESTIONS:
      return {
        ...state,
        [action.userId]: {
          ...state[action.userId],
          questions: state[action.userId].questions.concat(action.questionId),
        },
      };
    default:
      return state;
  }
}
