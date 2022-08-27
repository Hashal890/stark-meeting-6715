import { loginFailure, loginSuccess } from "./ActionCreaters";

export default function Reducer(state, action) {
  switch (action.type) {
    case loginSuccess:
      return {
        ...state,
        isAuth: true,
        token: action.payload.token,
      };
    case loginFailure:
      return {
        ...state,
        isAuth: false,
        token: null,
      };
    default:
      return state;
  }
}
