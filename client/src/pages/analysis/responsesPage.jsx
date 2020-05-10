import PropTypes from 'prop-types';
import React, { useEffect, useState   } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createError } from '../../redux/actions/error';
import {getQuestionById } from '../../redux/models/question/actions/questions';
import {getAnswersVolume,filterAnswersVolume } from '../../redux/models/response/actions/responses';
import {reset} from "../../redux/actions/reset";
import Loading from './components/loading'; 
import ResponsesList from "./components/responsesList";
import {useParams} from "react-router-dom";
import Page from './components/Page';
import {
    Col,
    Row,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
    Button,
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
import {getLatestUserResponse,getMostAnsweredQuestion} from "../../redux/models/response/actions/responses";
import AnswersVolumeStat from"./components/stats/answersVolumeStat";
    
function ResponsesPage(props){  
  const [isLoading, setIsLoading] = useState(true);
  const [criteria, setCriteria] = useState([]);
  const [ageCriterion, setAgeCriterion] = useState({});
  const [submitFilter, setSubmitFilter] = useState(false);
  const {id} = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(false);
        await props.actions.reset();
        await props.actions.getQuestionById(id);
        await props.actions.getMostPublishedStudy();
        await props.actions.getQuestionsTypes();
        await props.actions.getMostActiveUsers();
        await props.actions.getLatestForm();
        await props.actions.getLatestStudy();
        await props.actions.getLatestUserResponse();
        await props.actions.getLatestPublishedForm();
        await props.actions.getMostAnsweredQuestion();
        if(submitFilter==false){
          await props.actions.getAnswersVolume(id);
        }
        else {
          await props.actions.filterAnswersVolume(id,criteria);
        } 
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        throw e; // let caller know the promise was rejected with this reason
      }
    };
    fetchData();
  },[]);
  const submitCriteria = (value) => {
    //setCriteria(criteria => [...criteria, newCriterion])
    setSubmitFilter(true);

  };
  const addCriterion=(field,value)=>{
    setAgeCriterion({"field":field,"value":value})  
    console.log(ageCriterion);
  }
  return(
    <div>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <Page
          className="QuestionDetailsPage"
          title="QuestionDetailsPage"
          breadcrumbs={[{ name: 'QuestionDetailsPage', active: true }]}
        >
        <Brief
          mostPublishedStudy={props.mostPublishedStudy}
          mostAnsweredQuestion= {props.mostAnsweredQuestion}
        />
        <Row>
        <Col md="6" sm="12" xs="12">
         <ResponsesList
          question={props.question }
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
            <AnswersVolumeStat
            answersVolume ={props.answersVolume }
            isAnswered= {props.isAnswered}/>
            you want to filter the answers by users criteria ? just type in the criterion and check it 
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                  <Input addon min={0} type="number" step="1" placeholder="type in the age of users you want to consider"  style={{ margin: "auto", width: 500 }} onChange={(e) => addCriterion("age",`${e.target.value}`)} />
              </InputGroupAddon>
            </InputGroup>
            <br/>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <Input addon type="checkbox" aria-label="Checkbox for following text input" />
                </InputGroupText>
              </InputGroupAddon>
              <Input placeholder="type in the address of users you want to consider" />
            </InputGroup>
            <br/>
            <Button color="info">filter</Button>
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
    )

}
ResponsesPage.propTypes = {
    questionId : PropTypes.string,
    actions: PropTypes.shape({
        getQuestionById: PropTypes.func,
        getMostPublishedStudy: PropTypes.func,
        getQuestionsTypes: PropTypes.func,
        getMostActiveUsers: PropTypes.func,
        reset: PropTypes.func,
        getLatestForm: PropTypes.func,
        getLatestPublishedForm: PropTypes.func,
        getLatestUserResponse: PropTypes.func,
        getLatestStudy: PropTypes.func,
        getMostAnsweredQuestion: PropTypes.func,
    })
};
export const mapStateToProps = (state,props) => {
    const question = state.questions[props.match.params.id];
    let isAnswered=true;
    const answersVolume =Object.keys(state.answersVolume).map(i => state.answersVolume[i]);
    const mostPublishedStudy = state.mostPublishedStudy;
    const questionsTypes = state.questionsTypes;
    const mostActiveUsers = Object.values(state.mostActiveUsers);
    const latestStudy= state.latestStudy;
    const latestForm= state.latestForm;
    const latestPublishedForm= state.latestPublishedForm;
    const latestUserResponse= state.latestUserResponse;
    const mostAnsweredQuestion = state.mostAnsweredQuestion;
    if(Object.entries(state.answersVolume).length === 0)
        isAnswered=false;
    return { question,answersVolume,isAnswered,mostPublishedStudy,questionsTypes,mostActiveUsers,latestUserResponse,
        latestForm,latestPublishedForm,latestStudy,mostAnsweredQuestion}; 
 
};
    
export const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({
            createError,
            reset,
            getQuestionById,
            getAnswersVolume,
            getMostPublishedStudy,
            getQuestionsTypes,
            getMostActiveUsers,
            getLatestStudy,
            getLatestUserResponse,
            getLatestPublishedForm,
            getLatestForm,
            getMostAnsweredQuestion
            },
        dispatch
        )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResponsesPage); 
