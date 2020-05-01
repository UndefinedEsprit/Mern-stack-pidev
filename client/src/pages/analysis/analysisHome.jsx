import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import orderBy from "lodash/orderBy";
import {
  getStudies,
  getCountForms,
  getMostPublishedStudy
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

function AnalysisHome(props) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        await props.actions.getCountForms();
        await props.actions.getStudies();
        await props.actions.getMostPublishedStudy();
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        throw e; // let caller know the promise was rejected with this reason
      }
    };
    fetchData();
  }, []);
  return (
    <Page
    className="StudiesPage"
    title="StudiesPage"
    breadcrumbs={[{ name: 'StudiesPage', active: true }]}
    >
      <Brief/>
      <Row>
      <Col md="6" sm="12" xs="12">
       <StudiesList
        countForms={props.countForms}
        studies={props.studies}
       />
      </Col>
      <Col md="6" sm="12" xs="12">
       <MostActiveUsers/>
      </Col>
    </Row>
    <QuestionsTypesBrief/>
    <Row>
      <Col lg="8" md="12" sm="12" xs="12">
        <FormsNumberStat
          countForms={props.countForms}
        />           
      </Col>
      <Col lg="4" md="12" sm="12" xs="12">
        <Latest/>
      </Col>
    </Row>
  </Page>
  );
}
AnalysisHome.propTypes = {
  studies: PropTypes.arrayOf(PropTypes.object),
  countForms: PropTypes.arrayOf(PropTypes.object),
  mostPublishedStudy:PropTypes.object,
  actions: PropTypes.shape({
    getStudies: PropTypes.func,
    createError: PropTypes.func,
    getCountForms: PropTypes.func,
    getMostPublishedStudy: PropTypes.func,
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
  console.log(mostPublishedStudy) ;
  return { studies, countForms,mostPublishedStudy };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        getStudies,
        getCountForms,
        getMostPublishedStudy
      },
      dispatch
    ),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AnalysisHome);
