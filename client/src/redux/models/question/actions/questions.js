import * as types from '../../../constants/types';
import { GetQuestionsByForm} from '../../../api/http';



export function getQuestionsForForm(formId){ 
    let questions;
    return async (dispatch) => {
    questions=  await GetQuestionsByForm(formId);
    dispatch (updateAvailableQuestions(questions)); 
    }  
}
export function updateAvailableQuestions(questions) {
    return {
        type: types.questions.GET,
        questions
    };
}

