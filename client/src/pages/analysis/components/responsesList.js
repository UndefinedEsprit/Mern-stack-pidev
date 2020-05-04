import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {
    Card,
    CardBody,
    CardHeader,
} from 'reactstrap';

const ResponsesList = (props) => { 
    return (
            <Card>
                <CardHeader>question details</CardHeader>
                <CardBody>
                <div>
                        {props.question  && (
                            <div >
                            < h3 >{props.question.text} </ h3>
                            < p >type :{props.question.type} </ p>  
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
                </CardBody>
            </Card>
    )
}
ResponsesList.propTypes = {
    question: PropTypes.object.isRequired,
};

export default ResponsesList;