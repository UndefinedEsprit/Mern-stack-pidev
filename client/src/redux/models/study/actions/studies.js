import * as types from '../../../constants/types';
import { GetStudies,GetCountForms,GetMostPublishedStudy} from '../../../api/http';

export function updateAvailableStudies(studies) { 
    return {
        type: types.studies.GET,
        studies
    };
}

export function updateCountForms( countForms) { 
        return {
            type: types.studies.GETCOUNTFORMS,
            countForms
        };
}
export function updateMostPublishedStudy(mostPublishedStudy) { 
        return {
            type: types.studies.GETMOSTPUBLISHEDSTUDY,
            mostPublishedStudy
        };
}
export  function getStudies() {
    let studies;
    return async (dispatch) => {
        studies=  await GetStudies();
        dispatch(updateAvailableStudies(studies));
        return(studies); 
    };
}
export  function getMostPublishedStudy() {
    let mostPublishedStudy;
    return async (dispatch) => {
        mostPublishedStudy=  await GetMostPublishedStudy();
        dispatch(updateMostPublishedStudy(mostPublishedStudy));
        return(mostPublishedStudy); 
    };
}
export  function getCountForms() {
    let countForms;
    return async (dispatch) => {
        countForms=  await GetCountForms();
        dispatch(updateCountForms(countForms));
        return(countForms); 
    
    };
}


