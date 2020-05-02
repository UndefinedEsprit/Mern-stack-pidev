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
  const { mostPublishedStudy } = props;
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
                <h7> containing {mostPublishedStudy.countForms} published
                 forms </h7>
             <br></br>
            
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
          subtitle="This question"
          number="9 answers"
          
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
                <h6>question type multilpe2</h6>
             <br></br>
             <h6>belonging to this form2</h6>
            
                </PopoverBody>
                </Popover>
       </NavLink>
      </Col>

      <Col lg={3} md={6} sm={6} xs={12}>
       <NavLink id="Popover3">
         < BsFillCaretDownFill size={20} color={"back"} />
        <NumberWidget
        onClick={toggleThird }
        title="most answered question"
          subtitle="This question"
          number="9 answers"
          
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
                <h6>question type multilpe3</h6>
             <br></br>
             <h6>belonging to this form3</h6>
            
                </PopoverBody>
                </Popover>
       </NavLink>
      </Col>

      <Col lg={3} md={6} sm={6} xs={12}>
       <NavLink id="Popover4">
         < BsFillCaretDownFill size={20} color={"back"} />
        <NumberWidget
        onClick={toggleFourth }
        title="most answered question"
          subtitle="This question"
          number="9 answers"
          
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
                <h6>question type multilpe4</h6>
             <br></br>
             <h6>belonging to this form4</h6>
            
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
};

export default Brief;