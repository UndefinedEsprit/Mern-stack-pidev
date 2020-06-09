import * as types from '../../../constants/types';
import { GetFormsByStudy,GetCountQuestions} from '../../../api/http';
import {GetFormsStatusByStudy,GetLatestForm,GetLatestPublishedForm} from '../../../api/http';
export function showForms(studyId) { 
    return {
        type: types.forms.SHOW,
        studyId
    };
}
export function toggleForms(studyId) {
    return {
        type: types.forms.TOGGLE,
        studyId
    };
}

export function updateCountQuestions( countQuestions) { 
        return {
            type: types.forms.GETCOUNTQUESTIONS,
            countQuestions
        };
}
export function getCountQuestions(studyId) {
    let countQuestions={};
    return async (dispatch) => {
        countQuestions= await GetCountQuestions(studyId);
        dispatch(updateCountQuestions(countQuestions));
    }
}

export function getFormsStatus(studyId) {
    let formsStatus={};
    return async (dispatch) => {
    formsStatus= await GetFormsStatusByStudy(studyId);
    dispatch(updateFormsStatus(formsStatus));
    }
}

export function updateFormsStatus( formsStatus) { 
        return {
            type: types.forms.GETFORMSSTATUS,
            formsStatus
        };
}

export function getFormsForStudy(studyId){ 
    let forms={};
    return async (dispatch) => {
    forms=  await GetFormsByStudy(studyId);
    dispatch (updateAvailableForms(forms)); 
    }  
}
export function updateAvailableForms(forms) {
    return {
        type: types.forms.GET,
        forms
    };
}

export function getLatestForm() {
    let latestForm={};
    return async (dispatch) => {
        latestForm= await GetLatestForm();
        dispatch(updateLatestForm(latestForm));
    }
}

export function updateLatestForm( latestForm) { 
        return {
            type: types.forms.GETLATESTFORM,
            latestForm
        };
}

export function getLatestPublishedForm() {
    let latestPublishedForm={};
    return async (dispatch) => {
        latestPublishedForm= await GetLatestPublishedForm();
        dispatch(updateLatestPublishedForm(latestPublishedForm));
    }
}

export function updateLatestPublishedForm( latestPublishedForm) { 
        return {
            type: types.forms.GETLATESTPUBLISHEDFORM,
            latestPublishedForm
        };
}
