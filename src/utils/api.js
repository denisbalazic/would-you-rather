import {
  _getQuestions,
  _getUsers,
  _getUser,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../utils/data";

export function getInitialData() {
  return Promise.all([_getQuestions(), _getUsers()]).then(([questions, users]) => ({
    questions,
    users,
  }));
}

export function getUser(id) {
  return _getUser(id).then((user) => user);
}
