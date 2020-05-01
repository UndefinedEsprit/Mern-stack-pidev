
import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {
    Card,
    CardBody,
    CardHeader,
} from 'reactstrap';

const StudiesList = (props) => { 
    const { countForms, studies } = props;
    return (
        <div>
            <Card>
                <CardHeader>Studies</CardHeader>
                <CardBody>
                    <div>
                        {studies.map((study) => (
                            <div>
                            {countForms.map((element) => {
                                if (element.studyName == study.name)
                                    return (
                                        <div class="row">
                                            <div>
                                                <Link  key={study._id}
                                                to={{ pathname: "/formspage/" + study._id }}><h3>{study.name}</h3></Link>
                                                <p>contains {element.formsNumber} forms</p> 
                                                <p>created in {new Date(study.createdAt).toISOString().substring(0, 10)}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ))}                  
                    </div>
                </CardBody>
            </Card>
        </div>
    ) 
}
StudiesList.propTypes = {
    studies: PropTypes.object.isRequired,
    countForms: PropTypes.object.isRequired,
};

export default StudiesList;