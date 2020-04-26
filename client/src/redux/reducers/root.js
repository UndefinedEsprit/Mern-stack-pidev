import { combineReducers } from 'redux'; 
import { error } from './error'; 
import { loading } from './loading';
import { studies, studyIds,countForms } from '../models/study/reducers/studies';
//import { user } from './user';
import { forms, formIds ,countQuestions,formsStatus} from '../models/form/reducers/forms'; 
import { questions,questionIds} from '../models/question/reducers/questions'; 
  
   const rootReducer = combineReducers({
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
    questionIds
});
 
export default rootReducer;