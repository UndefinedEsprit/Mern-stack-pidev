import * as types from '../../../constants/types';
import { GetQuestionsByForm,GetQuestionById} from '../../../api/http';



export function getQuestionsForForm(formId){ 
    let questions={};
    return async (dispatch) => { 
    questions=  await GetQuestionsByForm(formId);
    dispatch (updateAvailableQuestions(questions)); 
    }  
}

export function getQuestionById(questionId){ 
    let question={};
    return async (dispatch) => { 
    question=  await GetQuestionById(questionId);
    dispatch (updateAvailableQuestions([question])); 
    }  
}
export function updateAvailableQuestions(questions) {
    return {
        type: types.questions.GET,
        questions
    };
}



