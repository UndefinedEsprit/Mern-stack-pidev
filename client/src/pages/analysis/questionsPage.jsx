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
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
  
  
function QuestionsPage(props){  
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
            setIsLoading(true);
            await props.actions.reset();
            await props.actions.getQuestionsForForm(id);  
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
        <div><Loading/></div>
        ) : (
            <div>
                {props.questions  && (
                   <div >
                        {props.questions.map(question =>
                            {return( 
                                <div>
                                    < p >{question.text} </ p>
                                    < p >{question.type} </ p>
                                    <Link  key={question._id} to={{ pathname:'/responsespage/'+question._id}}> check </Link> 
                                </div>                              
                            )}                                                                                                  
                        )}
                        <div>                    
                                <QuestionsTypesStat
                                questions ={props.questions } />
                            </div>
                    </div>  
                    
                )}
            </div>
        )}
    </div>  
    )

}
QuestionsPage.propTypes = {
    actions: PropTypes.shape({
        getQuestionsForForm: PropTypes.func,
        reset: PropTypes.func,
    })
};
export const mapStateToProps = state => {
    const questions = orderBy(state.questionIds.map(questionId => state.questions[questionId]));
    return { questions }; 
};
    
export const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({
            createError,
            reset,
            getQuestionsForForm
            },
        dispatch
        )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage); 
