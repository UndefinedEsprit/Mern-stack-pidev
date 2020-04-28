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
 * Fetch answers volume by form question the API
 * @return {Response}          Fetch API Response
 */
export async function GetAnswersVolume(questionId) {
  let res;
  await axios.get(apiUrl + "/userresponse/getanswersvolume/" + questionId).then((response) => {
    res = response.data;
  });
  return res;
}