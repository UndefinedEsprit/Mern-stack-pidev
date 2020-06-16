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
export function mostFrequentAge(state = initialState.mostFrequentAge, action) {
  switch (action.type) {
    case types.users.GETMOSTFREQUENTAGE: {
      const { mostFrequentAge } = action;
      let nextState = Object.assign({}, state);
      nextState =mostFrequentAge;
      return nextState;
    }

    default:
      return state;
  }
}

export function users(state = initialState.users, action) {
  switch (action.type) {
    case types.users.GETUSERS: {
      const { users } = action;
      let nextState = Object.assign({}, state);
      for (let user of users) {
        if (!nextState[user._id]) {
          nextState[user._id] = user;
        }
      }
      return nextState;
    }

    default:
      return state;
  }
}
