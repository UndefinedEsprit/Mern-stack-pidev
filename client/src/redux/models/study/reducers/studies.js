import initialState from "../../../constants/initialState";
import * as types from "../../../constants/types";

export function studies(state = initialState.studies, action) {
  switch (action.type) {
    case types.studies.GET: {
      const { studies } = action;
      let nextState = Object.assign({}, state);
      for (let study of studies) {
        if (!nextState[study._id]) {
          nextState[study._id] = study;
        }
      }
      return nextState;
    }

    default:
      return state;
  }
}
export function studyIds(state = initialState.studyIds, action) {
  switch (action.type) {
    case types.studies.GET: {
      const nextStudyIds = action.studies.map((study) => study._id);
      let nextState = Array.from(state);
      for (let study of nextStudyIds) {
        if (!state.includes(study)) {
          nextState.push(study);
        }
      }
      return nextState;
    }
    default:
      return state;
  }
}

export function countForms(state = initialState.countForms, action) {
  switch (action.type) {
    case types.studies.GETCOUNTFORMS: {
      const { countForms } = action;
      let nextState = Object.assign({}, state);
      for (let StudyCountForms of countForms) {
        if (!nextState[StudyCountForms.studyId]) {
          nextState[StudyCountForms.studyId] = StudyCountForms;
        }
      }
      return nextState;
    }

    default:
      return state;
  }
}
