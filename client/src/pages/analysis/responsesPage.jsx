import PropTypes from 'prop-types';
import React, { useEffect, useState   } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import orderBy from 'lodash/orderBy';
import { createError } from '../../redux/actions/error';
import {getQuestionsForForm } from '../../redux/models/question/actions/questions';
import {reset} from "../../redux/actions/reset";
import Loading from './components/loading'; 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
  
  
function ResponsesPage(props){  
    const [isLoading, setIsLoading] = useState(false);
    return(
    <div>
        {isLoading ? (
        <div><Loading/></div>
        ) : (
            <div>
                {props.question  && (
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
                )}
            </div>
        )}
    </div>  
    )

}
ResponsesPage.propTypes = {
    questionId : PropTypes.string,
    actions: PropTypes.shape({
        getQuestionsForForm: PropTypes.func
    })
};
export const mapStateToProps = (state,props) => {
    const question = state.questions[props.match.params.id];
    console.log(question.responses);
    return { question }; 
};
    
export const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({
            createError,
            getQuestionsForForm
            },
        dispatch
        )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResponsesPage); 
