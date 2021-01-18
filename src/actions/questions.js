export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const UPDATE_QUESTION_VOTE = "UPDATE_QUESTION_VOTE";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function updateQuestionVote(authedUserId, questionId, option) {
  return {
    type: UPDATE_QUESTION_VOTE,
    authedUserId,
    questionId,
    option,
  };
}

export function updateQuestions(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}
