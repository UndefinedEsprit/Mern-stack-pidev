import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import orderBy from "lodash/orderBy";
import {reset} from "../../redux/actions/reset";
import {
  getStudies,
  getCountForms,
  getMostPublishedStudy,
  getLatestStudy
} from "../../redux/models/study/actions/studies";
import Page from './components/Page';
import {
  Col,
  Row,
} from 'reactstrap';
import Latest from "./components/latest";
import Brief from "./components/brief" ;
import QuestionsTypesBrief from "./components/questionsTypesBrief";
import MostActiveUsers from "./components/mostActiveUsers";
import FormsNumberStat from "./components/stats/FormsNumberStat";
import StudiesList from "./components/studiesList";
import {getMostActiveUsers} from "../../redux/models/user/actions/users";
import {getQuestionsTypes} from "../../redux/models/question/actions/questions";
import {getLatestForm,getLatestPublishedForm} from "../../redux/models/form/actions/forms";
import {getLatestUserResponse,getMostAnsweredQuestion,getMostChosenAnswer} from "../../redux/models/response/actions/responses";
import Loading from "./components/loading";

function AnalysisHome(props) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        await props.actions.reset();
        await props.actions.getCountForms();
        await props.actions.getStudies();
        await props.actions.getMostPublishedStudy();
        await props.actions.getQuestionsTypes();
        await props.actions.getMostActiveUsers();
        await props.actions.getLatestForm();
        await props.actions.getLatestStudy();
        await props.actions.getLatestUserResponse();
        await props.actions.getLatestPublishedForm(); 
        await props.actions.getMostAnsweredQuestion();   
        await props.actions.getMostChosenAnswer();   
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        throw e; // let caller know the promise was rejected with this reason
      }
    };
    fetchData();
  }, []);

  return (
  <div>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
    <Page
    className="StudiesPage"
    title="StudiesPage"
    breadcrumbs={[{ name: 'StudiesPage', active: true }]}
    >
      <Brief
      mostPublishedStudy={props.mostPublishedStudy}
      mostAnsweredQuestion= {props.mostAnsweredQuestion}
      mostChosenAnswer={props.mostChosenAnswer}
      />
      <Row>
      <Col md="6" sm="12" xs="12">
       <StudiesList
        countForms={props.countForms}
        studies={props.studies}
       />
      </Col>
      <Col md="6" sm="12" xs="12">
      <MostActiveUsers
       usersList = {props.mostActiveUsers}
       />
      </Col>
    </Row>
    <QuestionsTypesBrief
    questionsTypes={props.questionsTypes}
    />
    <Row>
      <Col lg="8" md="12" sm="12" xs="12">
        <FormsNumberStat
          countForms={props.countForms}
        />           
      </Col>
      <Col lg="4" md="12" sm="12" xs="12">
      <Latest
        latestStudy={props.latestStudy}
        latestForm={props.latestForm}
        latestPublishedForm={props.latestPublishedForm}
        latestUserResponse={props.latestUserResponse}
        />
      </Col>
    </Row>
  </Page>
    )}
</div>
  );
}
AnalysisHome.propTypes = {
  studies: PropTypes.arrayOf(PropTypes.object),
  countForms: PropTypes.arrayOf(PropTypes.object),
  mostPublishedStudy:PropTypes.object,
  mostActiveUsers:PropTypes.object,
  latestForm:PropTypes.object,
  latestPublishedForm:PropTypes.object,
  latestUserResponse:PropTypes.object,
  latestStudy:PropTypes.object,
  actions: PropTypes.shape({
    getStudies: PropTypes.func,
    createError: PropTypes.func,
    getCountForms: PropTypes.func,
    getMostPublishedStudy: PropTypes.func,
    getQuestionsTypes: PropTypes.func,
    getMostActiveUsers: PropTypes.func,
    reset: PropTypes.func,
    getLatestForm: PropTypes.func,
    getLatestPublishedForm: PropTypes.func,
    getLatestUserResponse: PropTypes.func,
    getLatestStudy: PropTypes.func,
    getMostAnsweredQuestion: PropTypes.func,
    getMostChosenAnswer: PropTypes.func,
  }),
};
export const mapStateToProps = (state) => {
  const studies = orderBy(
    state.studyIds.map((studyId) => state.studies[studyId])
  );
  const countForms = orderBy(
    state.studyIds.map((studyId) => state.countForms[studyId])
  );
  const mostPublishedStudy = state.mostPublishedStudy;
  const questionsTypes = state.questionsTypes;
  const mostActiveUsers = Object.values(state.mostActiveUsers);
  const latestStudy= state.latestStudy;
  const latestForm= state.latestForm;
  const latestPublishedForm= state.latestPublishedForm;
  const latestUserResponse= state.latestUserResponse;
  const mostAnsweredQuestion = state.mostAnsweredQuestion;
  const mostChosenAnswer= state.mostChosenAnswer;
  return { studies, countForms,mostPublishedStudy,questionsTypes,mostActiveUsers,latestUserResponse,
    latestForm,latestPublishedForm,latestStudy,mostAnsweredQuestion,mostChosenAnswer};
};

export const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        reset,
        getStudies,
        getCountForms,
        getMostPublishedStudy,
        getQuestionsTypes,
        getMostActiveUsers,
        getLatestStudy,
        getLatestUserResponse,
        getLatestPublishedForm,
        getLatestForm,
        getMostAnsweredQuestion,
        getMostChosenAnswer
      },
      dispatch
    ),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AnalysisHome);
