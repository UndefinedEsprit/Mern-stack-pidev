import initialState from "../../../constants/initialState";
import * as types from "../../../constants/types";

export function mostActiveUsers(state = initialState.mostActiveUsers, action) {
  switch (action.type) {
    case types.users.GETMOSTACTIVEUSERS: {
      const { mostActiveUsers } = action;
      let nextState = Object.assign({}, state);
      for (let mostActiveUser of mostActiveUsers) {
        if (!nextState[mostActiveUser.userId]) {
          nextState[mostActiveUser.userId] = mostActiveUser;
        }
      }
      return nextState;
    }

    default:
      return state;
  }
}
