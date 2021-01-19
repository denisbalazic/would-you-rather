import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
  _authenticateUser,
} from "../utils/data";

export function getInitialData() {
  return Promise.all([_getQuestions(), _getUsers()]).then(([questions, users]) => ({
    questions,
    users,
  }));
}

export function authenticateUser(username) {
  return _authenticateUser({ username }).then((user) => {
    return user;
  });
}

export function saveQuestionAnswer(authedUserId, questionId, option) {
  return _saveQuestionAnswer({ authedUserId, questionId, option }).then(() => {});
}

export function saveNewQuestion(optionOneText, optionTwoText, author) {
  return _saveQuestion({ optionOneText, optionTwoText, author }).then((question) => question);
}
