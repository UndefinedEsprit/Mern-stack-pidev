import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import orderBy from "lodash/orderBy";
import { createError } from "../../redux/actions/error";
import {reset} from "../../redux/actions/reset";
import {
  getFormsForStudy,
  getCountQuestions,
  getFormsStatus,
} from "../../redux/models/form/actions/forms";
import AllFormsQuestionsNumbersStat from "./components/stats/allFormsQuestionsNumbersStat";
import Loading from "./components/loading";
import FormsStatusStat from "./components/stats/formsStatusStat";
import {
  BrowserRouter as Router,
  useParams,
} from "react-router-dom";
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
import FormsList from "./components/formsList";
import {getMostActiveUsers} from "../../redux/models/user/actions/users";
import {getQuestionsTypes} from "../../redux/models/question/actions/questions";
import {getLatestForm,getLatestPublishedForm} from "../../redux/models/form/actions/forms";
import {getLatestUserResponse} from "../../redux/models/response/actions/responses";

function FormsPage(props) {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        await props.actions.reset();
        await props.actions.getCountQuestions(id );
        await props.actions.getFormsForStudy(id );
        await props.actions.getFormsStatus(id );
        await props.actions.getMostPublishedStudy();
        await props.actions.getQuestionsTypes();
        await props.actions.getMostActiveUsers();
        await props.actions.getLatestForm();
        await props.actions.getLatestStudy();
        await props.actions.getLatestUserResponse();
        await props.actions.getLatestPublishedForm(); 
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
        className="FormsPage"
        title="FormssPage"
        breadcrumbs={[{ name: 'FormsPage', active: true }]}
      >
      <Brief
        mostPublishedStudy={props.mostPublishedStudy}
      />
      <Row>
      <Col md="6" sm="12" xs="12">
       <FormsList
        forms={props.forms}
        countQuestions={props.countQuestions}
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
      <FormsStatusStat formsStatus={props.formsStatus} />          
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
    <Row>
      <Col lg="8" md="12" sm="12" xs="12">
      <AllFormsQuestionsNumbersStat
        forms={props.forms}
        countQuestions={props.countQuestions}
      />          
      </Col>
    </Row>
  </Page>
      )}
    </div>
  );
}
FormsPage.propTypes = {
  actions: PropTypes.shape({
    getCountQuestions: PropTypes.func,
    getFormsForStudy: PropTypes.func,
    getFormsStatus: PropTypes.func,
    getMostPublishedStudy: PropTypes.func,
    getQuestionsTypes: PropTypes.func,
    getMostActiveUsers: PropTypes.func,
    reset: PropTypes.func,
    getLatestForm: PropTypes.func,
    getLatestPublishedForm: PropTypes.func,
    getLatestUserResponse: PropTypes.func,
    getLatestStudy: PropTypes.func
  }),
};
export const mapStateToProps = (state) => {
  const forms = orderBy(state.formIds.map((formId) => state.forms[formId]));
  const countQuestions = orderBy(
    state.formIds.map((formId) => state.countQuestions[formId])
  );
  const formsStatus = orderBy(
    state.formIds.map((formId) => state.formsStatus[formId])
  );
  const mostPublishedStudy = state.mostPublishedStudy;
  const questionsTypes = state.questionsTypes;
  const mostActiveUsers = Object.values(state.mostActiveUsers);
  const latestStudy= state.latestStudy;
  const latestForm= state.latestForm;
  const latestPublishedForm= state.latestPublishedForm;
  const latestUserResponse= state.latestUserResponse;
  return { forms, countQuestions, formsStatus,mostPublishedStudy,questionsTypes,mostActiveUsers,latestUserResponse,
    latestForm,latestPublishedForm,latestStudy};
};

export const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        createError,
        getCountQuestions,
        getFormsForStudy,
        getFormsStatus,
        reset,
        getMostPublishedStudy,
        getQuestionsTypes,
        getMostActiveUsers,
        getLatestStudy,
        getLatestUserResponse,
        getLatestPublishedForm,
        getLatestForm
      },
      dispatch
    ),
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(FormsPage);
