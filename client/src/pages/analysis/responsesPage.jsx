import PropTypes from 'prop-types';
import React, { useEffect, useState   } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import orderBy from 'lodash/orderBy';
import { createError } from '../../redux/actions/error';
import {getQuestionById } from '../../redux/models/question/actions/questions';
import {getAnswersVolume } from '../../redux/models/response/actions/responses';
import {reset} from "../../redux/actions/reset";
import Loading from './components/loading'; 
import AnswersVolumeStat from "./components/stats/answersVolumeStat";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
  
  
function ResponsesPage(props){  
    const [isLoading, setIsLoading] = useState(true);
    const {id} = useParams();
    useEffect(() => {
        const fetchData = async () => {
          try {
            setIsLoading(false);
            await props.actions.reset();
            await props.actions.getQuestionById(id);
            await props.actions.getAnswersVolume(id);
            setIsLoading(false);
          } catch (e) {
            console.log(e);
            throw e; // let caller know the promise was rejected with this reason
          }
        };
        fetchData();
      }, []);
    return(
    <div>
        {isLoading ? (
        <div><Loading/></div>
        ) : (
            <div>
                {props.question && props.answersVolume  && (
                    <div>
                        <div>
                            < p >{props.question.text} </ p>
                            < p >{props.question.type} </ p>  
                            {props.question.responses.map(response => 
                                {return(
                                    <div>
                                         <p>{response.text}</p>
                                    </div>
                                )}
                            )}             
                        </div>  
                        <div> 
                            {props.isAnswered ? (
                                <div><AnswersVolumeStat
                                answersVolume ={props.answersVolume } />></div>
                            ) : (            
                                <div>no responses found for this question</div>
                            )}
                        </div>
                    </div>                                                                                                                                       
                )}
            </div>
        )}
    </div>  
    )

}
ResponsesPage.propTypes = {
    questionId : PropTypes.string,
    actions: PropTypes.shape({
        reset: PropTypes.func,
        getQuestionById: PropTypes.func,
    })
};
export const mapStateToProps = (state,props) => {
    const question = state.questions[props.match.params.id];
    let isAnswered=true;
    const answersVolume =Object.keys(state.answersVolume).map(i => state.answersVolume[i]);
    if(Object.entries(state.answersVolume).length === 0)
        isAnswered=false;
    return { question,answersVolume,isAnswered}; 
};
    
export const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({
            createError,
            reset,
            getQuestionById,
            getAnswersVolume
            },
        dispatch
        )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResponsesPage); 
