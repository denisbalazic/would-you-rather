import { RECEIVE_QUESTIONS, UPDATE_QUESTION_VOTE, ADD_QUESTION } from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case UPDATE_QUESTION_VOTE:
      return {
        ...state,
        [action.questionId]: {
          ...state[action.questionId],
          [action.option]: {
            ...state[action.questionId][action.option],
            votes: state[action.questionId][action.option].votes.concat(action.authedUserId),
          },
        },
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    default:
      return state;
  }
}
