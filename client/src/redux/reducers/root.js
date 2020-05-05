import { combineReducers } from 'redux'; 
import { error } from './error'; 
import * as types from '../constants/types';
import { loading } from './loading';
import { studies, studyIds,countForms,mostPublishedStudy,latestStudy } from '../models/study/reducers/studies';
import { forms, formIds ,countQuestions,formsStatus,latestForm,latestPublishedForm} from '../models/form/reducers/forms'; 
import { questions,questionIds,questionsTypes} from '../models/question/reducers/questions'; 
import { answersVolume,latestUserResponse,mostAnsweredQuestion,numberOfAnswers} from '../models/response/reducers/responses';
import {mostActiveUsers} from '../models/user/reducers/users';
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
    answersVolume,
    mostPublishedStudy,
    questionsTypes,
    mostActiveUsers,
    latestUserResponse,
    latestStudy,
    latestForm,
    latestPublishedForm,
    mostAnsweredQuestion,
    numberOfAnswers
});
   const rootReducer = (state, action) => {
    // when a reset is dispatched it will reset redux state
    if (action.type == types.app.RESET) {
      state = initialReduxState;
    }
  
    return appReducer(state, action);
  };
export default rootReducer;