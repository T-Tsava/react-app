import { ADD_USER } from "../constants/action-types";

const initialState = {
    userInfo: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_USER) {
    return Object.assign({}, state, {
      userInfo: state.userInfo.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;