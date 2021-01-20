import { register, login, logout } from "../services/auth";
import { saveUser } from "../actions/users";
import { setAuthedUser } from "../actions/authedUser";

export const LOGOUT = "LOGOUT";

export function handleRegistration(username, name, password) {
  return (dispatch) => {
    return register(username, name, password).then((user) => {
      dispatch(setAuthedUser(user));
      dispatch(saveUser(user));
    });
  };
}

export function handleLogin(username, password) {
  return (dispatch) => {
    return login(username, password).then((user) => {
      dispatch(setAuthedUser(user));
    });
  };
}

export function handleLogout() {
  logout();
  return {
    type: LOGOUT,
  };
}
