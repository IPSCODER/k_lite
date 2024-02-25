import * as types from "../actions/actionType.js";

const initialState = {
  name: "user",
  userData: [],
  logininfo: false,
  salert:null
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNIN:
      return { ...state, login: state.login !== state.login };
    case types.SIGNUP:
      return { ...state, login: state.login !== state.login };
      case types.ALERT:
      return { ...state, salert:action.payload };
      case types.LOGIN_INFO:
      return { ...state, logininfo:action.payload };
    default:
      return state;
  }
};
