
export const app = { 
    ERROR: 'app/error',
    LOADED: 'app/loaded',
    LOADING: 'app/loading',
    RESET: 'app/reset'
}


export const studies = {
    GET: 'studies/get',
    GETCOUNTFORMS: 'studies/getCountForms',
    GETMOSTPUBLISHEDSTUDY: 'studies/getMostPublishedStudy',
    GETLATESTSTUDY:  "studies/getLatestStudy",
};
         
export const forms = {
    GET: 'forms/get',
    SHOW: 'forms/show',
    TOGGLE: 'forms/toggle',
    GETCOUNTQUESTIONS: 'forms/getCountQuestions',
    GETFORMSSTATUS: 'forms/getFormsStaus',
    GETLATESTFORM:  "forms/getLatestForm",
    GETLATESTPUBLISHEDFORM: "forms/getLatestPublishedForm" 
};

export const questions = {
    GET: 'questions/get',
    GETQUESTIONSTYPES: 'questions/getQuestionsTypes',
    
};

export const users = {
    GETMOSTACTIVEUSERS: 'users/getMostActiveUsers',
    GETUSERS: 'users/getUsers',  
};

export const answers = {
    GET: 'answers/get',
    GETANSWERSVOLUME :'answers/getAnswersVolume',
    GETLATESTUSERRESPONSE: "answers/getLatestUserResponse",
    GETMOSTCHOSENANSWER : "answers/getMostChosenAnswer",
    GETMOSTANSWEREDQUESTION: 'questions/getMostAnsweredQuestion',
    GETNUMBEROFANSWERS: 'forms/getNumberOfAnswersByForm'
};