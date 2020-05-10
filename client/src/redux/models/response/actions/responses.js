import * as types from '../../../constants/types';
import {GetAnswersVolume,GetLatestUserResponse,GetMostAnsweredQuestion,GetNumberOfAnswersByForm,FilterAnswersVolumeByUserCriteria} from '../../../api/http';



export function getAnswersVolume(questionId){ 
    let answersVolume={};
    return async (dispatch) => { 
    answersVolume=  await GetAnswersVolume(questionId);
    dispatch (updateAnswersVolume(answersVolume)); 
    }  
}

export function filterAnswersVolume(questionId,criteria){ 
    let answersVolume={};
    return async (dispatch) => { 
    answersVolume=  await FilterAnswersVolumeByUserCriteria(questionId,criteria);
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

export function getMostAnsweredQuestion(){ 
    let mostAnsweredQuestion={};
    return async (dispatch) => { 
        mostAnsweredQuestion=  await GetMostAnsweredQuestion();
        dispatch (updateMostAnsweredQuestion(mostAnsweredQuestion)); 
    }  
}
export function updateMostAnsweredQuestion(mostAnsweredQuestion) {
    return {
        type: types.answers.GETMOSTANSWEREDQUESTION,
        mostAnsweredQuestion
    };
}
export function getNumberOfAnswersByForm(id){ 
    let numberOfAnswers={};
    return async (dispatch) => { 
        numberOfAnswers=  await GetNumberOfAnswersByForm(id);
        dispatch (updateNumberOfAnswers(numberOfAnswers)); 
    }  
}
export function updateNumberOfAnswers(numberOfAnswers) {
    return {
        type: types.answers.GETNUMBEROFANSWERS,
        numberOfAnswers
    };
}