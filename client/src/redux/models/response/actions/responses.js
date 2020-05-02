import * as types from '../../../constants/types';
import {GetAnswersVolume,GetLatestUserResponse} from '../../../api/http';



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

export function getLatestUserResponse(){ 
    let latestUserResponse={};
    return async (dispatch) => { 
        latestUserResponse=  await GetLatestUserResponse();
        dispatch (updateLatestUserResponse(latestUserResponse)); 
    }  
}
export function updateLatestUserResponse(latestUserResponse) {
    return {
        type: types.answers.GETLATESTUSERRESPONSE,
        latestUserResponse
    };
}