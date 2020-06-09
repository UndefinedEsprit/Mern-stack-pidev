import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {
    Card,
    CardBody,
    CardHeader,
} from 'reactstrap';

const QuestionsList= (props) => { 
    return (
        <div>
            <Card>
                <CardHeader>Questions</CardHeader>
                <CardBody>
                    <div>
                        {props.questions  && (
                            <div >
                                {props.questions.map(question =>
                                    {return( 
                                        <div>
                                            <Link  key={question._id} to={{ pathname:'/responsespage/'+question._id}}> <h3>{question.text}</h3></Link>
                                            <p>a {question.type} question</p> 
                                        </div>                              
                                    )}                                                                                                  
                                )}
                            </div>      
                        )}
                    </div>
                </CardBody>
            </Card>
        </div>
    ) 
}
QuestionsList.propTypes = {
    questions: PropTypes.object.isRequired,
};

export default QuestionsList;