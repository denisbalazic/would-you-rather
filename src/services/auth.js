import { _register, _login } from "../utils/data";

export function register(username, name, password) {
  return _register({ username, name, password }).then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data.user;
  });
}

export function login(username, password) {
  return _login({ username, password }).then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data.user;
  });
}

export function logout() {
  localStorage.removeItem("user");
}
