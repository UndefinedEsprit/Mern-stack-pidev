import React, {  useState } from 'react';
import PropTypes from "prop-types";
import { NumberWidget } from './Widget';
import { BsFillCaretDownFill } from "react-icons/bs";
import {
  NavLink,
    Col,
    Row,
    Popover,
    PopoverBody,
  } from 'reactstrap';
const Brief = (props) => {
  console .log(props.mostFrequentAge);
  const { mostPublishedStudy ,mostAnsweredQuestion,mostChosenAnswer} = props;
  const [isOpenFirst, setIsOpenFirst] = useState(false);
  const toggleFirst = () => {
       setIsOpenFirst(!isOpenFirst)
  };
  const [isOpenSecond, setIsOpenSecond] = useState(false);
  const toggleSecond = () => {
       setIsOpenSecond(!isOpenSecond)
  };
  const [isOpenThird, setIsOpenThird] = useState(false);
  const toggleThird = () => {
       setIsOpenThird(!isOpenThird)
  };
  const [isOpenFourth, setIsOpenFourth] = useState(false);
  const toggleFourth = () => {
       setIsOpenFourth(!isOpenFourth)
  };
  //{new Date(mostPublishedStudy.createdAt).toISOString().substring(0, 10)}
    return (
        <div>
            <Row>
       <Col lg={3} md={6} sm={6} xs={12}>
       <NavLink id="Popover1">
         < BsFillCaretDownFill size={20} color={"back"} />
        <NumberWidget
        onClick={toggleFirst }
        title="most published study"
          subtitle={mostPublishedStudy.studyName}
          number={mostPublishedStudy.countForms} 
          
        /> 
         
         <Popover
              placement="bottom"
              isOpen={isOpenFirst}
              toggle={toggleFirst }
              target="Popover1"
              className="p-0 border-0"
              style={{ minWidth: 200 }}
            >
              <PopoverBody className="p-0 border-light"style ={{
                height: 90,
                borderStyle:"groovy",
                borderWidth:"thin",
                backgroundColor:"#f0f2f0", 
              }}>
                <h7> {mostPublishedStudy.studyName}</h7>
                <h7> was created at</h7>
                <h7> {mostPublishedStudy.createdAt}  </h7>
                <h7> containing {mostPublishedStudy.countForms} published forms</h7>
            
                </PopoverBody>
                </Popover>
       </NavLink>
      </Col>

      <Col lg={3} md={6} sm={6} xs={12}>
       <NavLink id="Popover2">
         < BsFillCaretDownFill size={20} color={"back"} />
        <NumberWidget
        onClick={toggleSecond }
        title="most answered question"
          subtitle={mostAnsweredQuestion.questionText}
          number={mostAnsweredQuestion.count}
          
        /> 
         
         <Popover
              placement="bottom"
              isOpen={isOpenSecond}
              toggle={toggleSecond }
              target="Popover2"
              className="p-0 border-0"
              style={{ minWidth: 200 }}
            >
              <PopoverBody className="p-0 border-light"style ={{
                height: 90,
                borderStyle:"groovy",
                borderWidth:"thin",
                backgroundColor:"#f0f2f0", 

              }}>
                <h7> '{mostAnsweredQuestion.questionText}'</h7>
                <h7> asked in the form </h7>
                <h7> '{mostAnsweredQuestion.formTitle}' </h7>
                <h7> in the study  '{mostAnsweredQuestion.studyName}' </h7>
            
                </PopoverBody>
                </Popover>
       </NavLink>
      </Col>

      <Col lg={3} md={6} sm={6} xs={12}>
       <NavLink id="Popover3">
         < BsFillCaretDownFill size={20} color={"back"} />
        <NumberWidget
        onClick={toggleThird }
        title="most chosen answer"
          subtitle={mostChosenAnswer.text}
          number={mostChosenAnswer.count}
          
        /> 
         
         <Popover
              placement="bottom"
              isOpen={isOpenThird }
              toggle={toggleThird  }
              target="Popover3"
              className="p-0 border-0"
              style={{ minWidth: 200 }}
            >
              <PopoverBody className="p-0 border-light"style ={{
                height: 90,
                borderStyle:"groovy",
                backgroundColor:"#f0f2f0",
                borderWidth:"thin", 
              }}>
                <h7>responding to the question </h7>
              <h7> '{mostChosenAnswer.questionText}'</h7>
                <h7> asked in the form </h7>
                <h7> '{mostChosenAnswer.formTitle}' </h7>
                <h7> in the study  '{mostChosenAnswer.studyName}' </h7>
            
                </PopoverBody>
                </Popover>
       </NavLink>
      </Col>

      <Col lg={3} md={6} sm={6} xs={12}>
       <NavLink id="Popover4">
         < BsFillCaretDownFill size={20} color={"back"} />
        <NumberWidget
        onClick={toggleFourth }
        title="the most frequent age "
          subtitle={props.mostFrequentAge._id}
          number={props.mostFrequentAge.count}
        /> 
         
         <Popover
              placement="bottom"
              isOpen={isOpenFourth}
              toggle={toggleFourth }
              target="Popover4"
              className="p-0 border-0"
              style={{ minWidth: 200 }}
            >
              <PopoverBody className="p-0 border-light"style ={{
                height: 90,
                borderStyle:"groovy",
                borderWidth:"thin", 
                backgroundColor:"#f0f2f0",
              }}>
              <h7>there are  </h7>
              <h7> {props.mostFrequentAge.count}'</h7>
                <h7> users with the most commun age of </h7>
                <h7> '{props.mostFrequentAge._id}' </h7>
                </PopoverBody>
                </Popover>
       </NavLink>
      </Col>
      </Row>
        </div>
    ) 
}
Brief.propTypes = {
  mostPublishedStudy: PropTypes.object.isRequired,
  mostAnsweredQuestion: PropTypes.object.isRequired,
  mostChosenAnswer: PropTypes.object.isRequired,
  mostFrequentAge: PropTypes.object.isRequired
};

export default Brief;