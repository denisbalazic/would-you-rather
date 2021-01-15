import { _getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer } from "../utils/data";

export function getInitialData() {
  return Promise.all([_getQuestions(), _getUsers()]).then(([questions, users]) => ({
    questions,
    users,
  }));
}
