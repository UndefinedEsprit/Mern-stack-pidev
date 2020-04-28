import * as types from '../../../constants/types';
import { GetStudies,GetCountForms} from '../../../api/http';

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
export  function getStudies() {
    let studies;
    return async (dispatch) => {
        studies=  await GetStudies();
        dispatch(updateAvailableStudies(studies));
        return(studies); 
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

