import {
  SET_AUTHED_USER,
  LOGOUT,
  UPDATE_AUTHEDUSER_VOTE,
  UPDATE_AUTHEDUSER_QUESTIONS,
} from "../actions/authedUser";

export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.user;
    case LOGOUT:
      return null;
    case UPDATE_AUTHEDUSER_VOTE:
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.questionId]: action.option,
        },
      };
    case UPDATE_AUTHEDUSER_QUESTIONS:
      return {
        ...state,
        questions: state.questions.concat(action.questionId),
      };
    default:
      return state;
  }
}
