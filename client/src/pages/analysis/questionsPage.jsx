import PropTypes from 'prop-types';
import React, { useEffect, useState   } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import orderBy from 'lodash/orderBy';
import { createError } from '../../redux/actions/error';
import {getQuestionsForForm } from '../../redux/models/question/actions/questions';
import QuestionsTypesStat from './components/stats/questionsTypesStat';
import {reset} from "../../redux/actions/reset";
import Loading from './components/loading'; 
import { useParams} from "react-router-dom";
import Page from './components/Page';
import {
    Col,
    Row,
} from 'reactstrap'; 
import {
    getMostPublishedStudy,
    getLatestStudy
} from "../../redux/models/study/actions/studies";
import Latest from "./components/latest";
import Brief from "./components/brief" ;
import QuestionsTypesBrief from "./components/questionsTypesBrief";
import MostActiveUsers from "./components/mostActiveUsers";
import {getMostActiveUsers} from "../../redux/models/user/actions/users";
import {getQuestionsTypes} from "../../redux/models/question/actions/questions";
import {getLatestForm,getLatestPublishedForm} from "../../redux/models/form/actions/forms";
import {getLatestUserResponse,getMostAnsweredQuestion,getNumberOfAnswersByForm} from "../../redux/models/response/actions/responses";
import QuestionsList from "./components/questionsList";
import QuestionsAnswsersStat from './components/stats/questionsAnswersStat'; 

  
function QuestionsPage(props){  
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
            setIsLoading(true);
            await props.actions.reset();
            await props.actions.getQuestionsForForm(id);  
            await props.actions.getMostPublishedStudy();
            await props.actions.getQuestionsTypes();
            await props.actions.getMostActiveUsers();
            await props.actions.getLatestForm();
            await props.actions.getLatestStudy();
            await props.actions.getLatestUserResponse();
            await props.actions.getLatestPublishedForm(); 
            await props.actions.getMostAnsweredQuestion();
            await props.actions.getNumberOfAnswersByForm(id);
            setIsLoading(false);
            } catch(e) {
            console.log(e);
            throw e;      // let caller know the promise was rejected with this reason
            }
        }
    fetchData();        
    }, []);
    //console.log(isLoading);
    return(
        <div>
        {isLoading ? (
          <div>
            <Loading />
          </div>
        ) : (
        <Page
          className="QuestionsPage"
          title="QuestionsPage"
          breadcrumbs={[{ name: 'QuestionsPage', active: true }]}
        >
        <Brief
          mostPublishedStudy={props.mostPublishedStudy}
          mostAnsweredQuestion= {props.mostAnsweredQuestion}
        />
        <Row>
        <Col md="6" sm="12" xs="12">
         <QuestionsList
          questions ={props.questions }
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
            <QuestionsTypesStat
            questions ={props.questions } />      
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
            <QuestionsAnswsersStat
             numberOfAnswers ={props. numberOfAnswers } />      
        </Col>
      </Row>
    </Page>
        )}
      </div>
    );
 

}
QuestionsPage.propTypes = {
    actions: PropTypes.shape({
        getQuestionsForForm: PropTypes.func,
        getMostPublishedStudy: PropTypes.func,
        getQuestionsTypes: PropTypes.func,
        getMostActiveUsers: PropTypes.func,
        reset: PropTypes.func,
        getLatestForm: PropTypes.func,
        getLatestPublishedForm: PropTypes.func,
        getLatestUserResponse: PropTypes.func,
        getLatestStudy: PropTypes.func,
        getMostAnsweredQuestion: PropTypes.func,
        getNumberOfAnswersByForm: PropTypes.func,
    })
};
export const mapStateToProps = state => {
    const questions = orderBy(state.questionIds.map(questionId => state.questions[questionId]));
    const mostPublishedStudy = state.mostPublishedStudy;
    const questionsTypes = state.questionsTypes;
    const mostActiveUsers = Object.values(state.mostActiveUsers);
    const latestStudy= state.latestStudy;
    const latestForm= state.latestForm;
    const latestPublishedForm= state.latestPublishedForm;
    const latestUserResponse= state.latestUserResponse;
    const mostAnsweredQuestion = state.mostAnsweredQuestion;
    const numberOfAnswers= Object.values(state.numberOfAnswers);
    return { questions ,mostPublishedStudy,questionsTypes,mostActiveUsers,latestUserResponse,
        latestForm,latestPublishedForm,latestStudy,mostAnsweredQuestion,numberOfAnswers}; 
};
    
export const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({
            createError,
            reset,
            getQuestionsForForm,
            getMostPublishedStudy,
            getQuestionsTypes,
            getMostActiveUsers,
            getLatestStudy,
            getLatestUserResponse,
            getLatestPublishedForm,
            getLatestForm,
            getMostAnsweredQuestion,
            getNumberOfAnswersByForm
            },
        dispatch
        )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage); 
