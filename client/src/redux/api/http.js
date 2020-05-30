import axios from "axios";
const apiUrl = process.env.REACT_APP_SERVER_URL;

/**
 * Fetch studies from the API
 * @return {Response}          Fetch API Response
 */
export async function GetStudies() {
  let res;
  await axios.get(apiUrl + "/study/").then((response) => {
    res = response.data;
  });
  return res;
}

/**
 * Fetch number of forms per study from the API
 * @return {Response}          Fetch API Response
 */
export async function GetCountForms() {
  let res;
  await axios.get(apiUrl + "/study/getCountForms").then((response) => {
    res = response.data;
  });
  return res;
}

/**
 * Fetch number of questions per form from the API
 * @return {Response}          Fetch API Response
 */
export async function GetCountQuestions(studyId) {
  let res;
  await axios
    .get(apiUrl + "/form/getCountQuestions/" + studyId)
    .then((response) => {
      res = response.data;
    });
  return res;
}
/**
 * Fetch forms by study from the API
 * @return {Response}          Fetch API Response
 */
export async function GetFormsByStudy(studyId) {
  let res;
  await axios.get(apiUrl + "/form/getbystudy/" + studyId).then((response) => {
    res = response.data;
  });
  return res;
}

/**
 * Fetch forms status by study from the API
 * @return {Response}          Fetch API Response
 */
export async function GetFormsStatusByStudy(studyId) {
  let res;
  await axios
    .get(apiUrl + "/form/getStatusByStudy/" + studyId)
    .then((response) => {
      res = response.data;
    });
  return res;
}

/**
 * Fetch questions by form from the API
 * @return {Response}          Fetch API Response
 */
export async function GetQuestionsByForm(formId) {
  let res;
  await axios.get(apiUrl + "/question/getbyform/" + formId).then((response) => {
    res = response.data;
  });
  return res;
}

/**
 * Fetch questions by id from the API
 * @return {Response}          Fetch API Response
 */
export async function GetQuestionById(questionId) {
  let res;
  await axios.get(apiUrl + "/question/" + questionId).then((response) => {
    res = response.data;
  });
  return res;
}

/**
 * Fetch answers volume by question from the API
 * @return {Response}          Fetch API Response
 */
export async function GetAnswersVolume(questionId) {
  let res;
  await axios.get(apiUrl + "/userresponse/getanswersvolume/" + questionId).then((response) => {
    res = response.data;
  });
  return res;
}
/**
 * Fetch answers volume by user criteria and by question from the API
 * @return {Response}          Fetch API Response
 */
export async function FilterAnswersVolumeByUserCriteria(questionId,criteria) {
  let res;
  await axios.post(apiUrl + "/userresponse/filteranswersvolumebyusercriteria",
  {
    "criteria":	criteria,
    "questionId":questionId
  }).then((response) => {
    res = response.data;
  });
  return res;
}

/**
 * Fetch Most Published Study form the API
 * @return {Response}          Fetch API Response
 */
export async function GetMostPublishedStudy() {
  let res;
  await axios.get(apiUrl + "/study/getstudywithmostpublishedforms").then((response) => {
    res = response.data;
  });
  return res;
}
/**
 * Fetch all questions types form the API
 * @return {Response}          Fetch API Response
 */
export async function GetQuestionsTypes() {
  let res;
  await axios.get(apiUrl + "/question/getquestionstypes").then((response) => {
    res = response.data;
  });
  return res;
}

/**
 * Fetch most active users globally form the API
 * @return {Response}          Fetch API Response
 */
export async function GetMostActiveUsers() {
  let res;
  await axios.get(apiUrl + "/user/getmostactiveusers").then((response) => {
    res = response.data;
  });
  return res;
}

/**
 * Fetch latest study form the API
 * @return {Response}          Fetch API Response
 */
export async function GetLatestStudy() {
  let res;
  await axios.get(apiUrl + "/study/getLatestStudy").then((response) => {
    res = response.data;
  });
  return res;
}

/**
 * Fetch latest form form the API
 * @return {Response}          Fetch API Response
 */
export async function GetLatestForm() {
  let res;
  await axios.get(apiUrl + "/form/getLatestForm").then((response) => {
    res = response.data;
  });
  return res;
}

/**
 * Fetch latest paublished form form the API
 * @return {Response}          Fetch API Response
 */
export async function GetLatestPublishedForm() {
  let res;
  await axios.get(apiUrl + "/form/getLatestPublishedForm").then((response) => {
    res = response.data;
  });
  return res;
}

/**
 * Fetch latest User Response form the API
 * @return {Response}          Fetch API Response
 */
export async function GetLatestUserResponse() {
  let res;
  await axios.get(apiUrl + "/userResponse/getLatestUserResponse").then((response) => {
    res = response.data;
  });
  return res;
}

/**
 * Fetch most answered question form the API
 * @return {Response}          Fetch API Response
 */
export async function GetMostAnsweredQuestion() {
  let res;
  await axios.get(apiUrl + "/userResponse/getMostAnsweredQuestion").then((response) => {
    res = response.data;
  });
  return res;
}

/**
 * Fetch number of answers by form the API
 * @return {Response}          Fetch API Response
 */
export async function GetNumberOfAnswersByForm(formId) {
  let res;
  await axios.get(apiUrl + "/form/getNumberOfAnswersByForm/"+ formId).then((response) => {
    res = response.data;
  });
  return res;
}

/**
 * Fetch most chosen answer form the API
 * @return {Response}          Fetch API Response
 */
export async function GetMostChosenAnswer() {
  let res;
  await axios.get(apiUrl + "/userResponse/getMostChosenAnswer").then((response) => {
    res = response.data;
  });
  return res;
}



