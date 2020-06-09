import initialState from '../../../constants/initialState'; 
import * as types from '../../../constants/types';


export function forms(state = initialState.forms, action) {
    switch (action.type) { 
        case types.forms.GET: { 
            const { forms } = action; 
            let nextState = Object.assign({}, state);
            for (let form of forms) {
                if (!nextState[form._id]) {
                    nextState[form._id] = form;
                }
            }
            return nextState;
        }
        default: 
            return state;
    }
}
 
export function formIds(state = initialState.formIds, action) {
    switch (action.type) {
        case types.forms.GET: {
            const nextFormIds = action.forms.map(form => form._id); 
            let nextState = Array.from(state); 
            for (let form of nextFormIds) {
                if (!state.includes(form)) {
                    nextState.push(form);
                }
            }
            return nextState;
        }
        default:
            return state;
    }
}
export function countQuestions(state = initialState.countQuestions, action) {
    switch (action.type) {
        case types.forms.GETCOUNTQUESTIONS: {
            const { countQuestions } = action;
            let nextState = Object.assign({}, state);
            for (let formCountQuestions of countQuestions) {
                if (!nextState[formCountQuestions.formId]) {
                    nextState[formCountQuestions.formId] = formCountQuestions;
                }
            }
            return nextState;
        }

        default:
            return state;
    }
}

export function formsStatus(state = initialState.formsStatus, action) {
    switch (action.type) {
        case types.forms.GETFORMSSTATUS: {
            const { formsStatus} = action;
            let nextState = Object.assign({}, state);
            for (let formStatus of formsStatus) {
                if (!nextState[formStatus.formId]) {
                    nextState[formStatus .formId] = formStatus ;
                }
            }
            return nextState;
        }

        default:
            return state;
    }
}

export function latestForm(state = initialState.latestForm, action) {
    switch (action.type) {
      case types.forms.GETLATESTFORM: {
        const {latestForm}= action;
        let nextState = Object.assign({}, state);
          nextState=latestForm;
        return nextState;
      }
  
      default:
        return state;
    }
}

export function latestPublishedForm(state = initialState.latestPublishedForm, action) {
    switch (action.type) {
      case types.forms.GETLATESTPUBLISHEDFORM: {
        const {latestPublishedForm}= action;
        let nextState = Object.assign({}, state);
          nextState=latestPublishedForm;
        return nextState;
      }
  
      default:
        return state;
    }
}