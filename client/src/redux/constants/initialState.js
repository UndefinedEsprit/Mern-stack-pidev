import { GetMostChosenAnswer } from "../api/http";

/**
 * Initial state for the redux store
 * @type {Object}
 */
export default {
    error: null,
    countForms: {},
    countQuestions: {},
    formsStatus: {},
    loading: false,
    studyIds: [],
    studies: {},
    formIds: [],
    forms: {},
    questionIds: [],
    questions: {},
    answersVolume: {},
    questionsTypes:{},
    mostPublishedStudy:{},
    mostActiveUsers:{},
    latestStudy: {},
    latestForm: {},
    latestPublishedForm: {},
    latestUserResponse: {},
    mostAnsweredQuestion: {},
    numberOfAnswers: {},
    mostChosenAnswer: {},
    users:{}

};