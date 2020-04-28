import { combineReducers } from 'redux'; 
import { error } from './error'; 
import * as types from '../constants/types';
import { loading } from './loading';
import { studies, studyIds,countForms } from '../models/study/reducers/studies';
import { forms, formIds ,countQuestions,formsStatus} from '../models/form/reducers/forms'; 
import { questions,questionIds} from '../models/question/reducers/questions'; 
import { answersVolume} from '../models/response/reducers/responses';
import initialReduxState from "../constants/initialState";
  
   const appReducer = combineReducers({
    formIds, 
    forms,
    error,
    loading,
    studyIds,
    studies,
    countForms,
    countQuestions,
    formsStatus,
    questions,
    questionIds,
    answersVolume
});
   const rootReducer = (state, action) => {
    // when a reset is dispatched it will reset redux state
    if (action.type == types.app.RESET) {
      state = initialReduxState;
    }
  
    return appReducer(state, action);
  };
export default rootReducer;