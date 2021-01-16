import { getUser } from "../utils/api";
export const SET_AUTHED_USER = "SET_AUTHED_USER";

// Ask if this is OK????
export function setAuthedUser(id) {
  return (dispatch) => {
    return getUser(id).then((user) => {
      dispatch({
        type: SET_AUTHED_USER,
        user,
      });
    });
  };
}
