
import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {
    Card,
    CardBody,
    CardHeader,
} from 'reactstrap';

const FormsList= (props) => { 
    return (
        <div>
            <Card>
                <CardHeader>Forms</CardHeader>
                <CardBody>
                    <div>
                        {props.forms && props.countQuestions && (
                            <div>
                                {props.forms.map((form) => (
                                    <div>
                                        {props.countQuestions.map((element) => {
                                            if (element.formId == form._id)
                                            return (
                                                <div class="row">
                                                    <div>
                                                        <Link
                                                            key={form._id}
                                                            to={{pathname: "/questionspage/" + form._id,}}>
                                                            <h3>{form.title}</h3>
                                                            </Link>
                                                        <p>contains {element.questionsNumber} questions</p> 
                                                        <p>created at {new Date(form.createdAt).toISOString().substring(0, 10)}</p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                ))}
                            </div>
                        )}                  
                    </div>
                </CardBody>
            </Card>
        </div>
    ) 
}
FormsList.propTypes = {
    forms: PropTypes.object.isRequired,
    countQuestions: PropTypes.object.isRequired,
};

export default FormsList;