import React from 'react';
import PropTypes from "prop-types";
import { getColor } from '../utils/colors';
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardDeck,
    CardGroup,
    CardHeader,
    CardTitle,
    Col,
    ListGroup,
    ListGroupItem,
    Row,
  } from 'reactstrap';
  import {
    MdBubbleChart,
    MdInsertChart,
    MdPersonPin,
    MdPieChart,
    MdRateReview,
    MdShare,
    MdShowChart,
    MdThumbUp,
  } from 'react-icons/md';
const Latest= (props) => { 
    const primaryColor = getColor('primary');
    return (
        <div>
            <Card>
          <CardHeader>Latest</CardHeader>
          <ListGroup flush>
            <ListGroupItem>
              <MdInsertChart size={25} color={primaryColor} /> Latest study{' '}
             '{props.latestStudy.name}'
            </ListGroupItem>
            <ListGroupItem>
              <MdBubbleChart size={25} color={primaryColor} /> Latest form {' '}'
              {props.latestForm.title}' from the study '{props.latestPublishedForm.studyName}'
            </ListGroupItem>
            <ListGroupItem>
              <MdShowChart size={25} color={primaryColor} /> Latest published form{' '}
             '{props.latestPublishedForm.title}' from the study '{props.latestPublishedForm.studyName}'
            </ListGroupItem>
            <ListGroupItem>
              <MdPieChart size={25} color={primaryColor} /> Latest answer was from '{props.latestUserResponse.userEmail}' responding by '{props.latestUserResponse.text}' for the question '{props.latestUserResponse.questionText}' askend in '{props.latestUserResponse.formTitle}' in the study '{props.latestUserResponse.studyName}'             
            </ListGroupItem>
          </ListGroup>
        </Card>
        </div>
    ) 
}
Latest.propTypes = {
  latestForm: PropTypes.object.isRequired,
  latestPublishedForm: PropTypes.object.isRequired,
  latestUserResponse: PropTypes.object.isRequired,
  latestStudy: PropTypes.object.isRequired,
};

export default Latest;