import * as types from '../../../constants/types';
import {GetAnswersVolume} from '../../../api/http';



export function getAnswersVolume(questionId){ 
    let answersVolume={};
    return async (dispatch) => { 
    answersVolume=  await GetAnswersVolume(questionId);
    dispatch (updateAnswersVolume(answersVolume)); 
    }  
}
export function updateAnswersVolume(answersVolume) {
    return {
        type: types.answers.GETANSWERSVOLUME,
        answersVolume
    };
}
