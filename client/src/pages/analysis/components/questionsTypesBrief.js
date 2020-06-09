import PropTypes from "prop-types";
import React from 'react';
import {
    MdThumbUp
  } from 'react-icons/md';
  import {
    AiOutlinePercentage,
    AiFillDatabase
  } from 'react-icons/ai';
import {
  Card,
  CardBody,
  CardGroup,
  CardHeader,
} from 'reactstrap';
  import { IconWidget } from './Widget';

const QuestionsTypesBrief= (props) => { 
  const {questionsTypes } = props;
   
    return (
        <div>
          <Card>
                <CardHeader>all questions types</CardHeader>
                <CardBody>
             <CardGroup style={{ marginBottom: '1rem' }}>
      <IconWidget
        bgColor="white"
        inverse={false}
        icon={AiOutlinePercentage}
        title={questionsTypes.rating}
        subtitle="rating questions"
      />
      <IconWidget
        bgColor="white"
        inverse={false}
        icon={AiFillDatabase}
        title={questionsTypes.multiple}
        subtitle="multiple questions"
      />
      <IconWidget
        bgColor="white"
        inverse={false}
        icon={MdThumbUp}
        title={questionsTypes.YesNo}
        subtitle="yes/no questions"
      />
    </CardGroup>
    </CardBody>
    </Card>
        </div>
    ) 
}
QuestionsTypesBrief.propTypes = {
  questionsTypes: PropTypes.object.isRequired,

};

export default QuestionsTypesBrief;