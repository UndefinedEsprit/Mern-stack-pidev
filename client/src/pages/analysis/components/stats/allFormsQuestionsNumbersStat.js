import PropTypes from "prop-types";
import React,{useEffect, useState} from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalBarSeries,
} from "react-vis";
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import {
  MdBubbleChart,
  MdInsertChart,
  MdPieChart,
  MdShowChart,
} from 'react-icons/md';
import { getColor } from '../../utils/colors';

const AllFormsQuestionsNumbersStat = (props) => {
  const [questionsNumber, setQuestionsNumber] = useState();
    const [maxForm, setMaxForm] = useState();
    const [minForm, setMinForm] = useState();
    const [primaryColor, setPrimaryColor] = useState();
    useEffect(() => {
      setQuestionsNumber(calculateQuestionsTotalNumber(props.countQuestions));
      setMaxForm(getFormWithMaximumQuestions(props.countQuestions));
      setMinForm(getFormWithMinimumQuestions(props.countQuestions));
      setPrimaryColor(getColor('primary'));
    },[]);
  return (
      <div>
          <Card>
            <CardHeader>number of questions per form</CardHeader>
            <CardBody>
              <DisplayStat
                countQuestions={props.countQuestions}
                />
              </CardBody>
                <ListGroup flush>
                  <ListGroupItem>
                    <MdInsertChart size={25} color={primaryColor} /> total number of forms{' '}
                      <Badge color="secondary">{props.countQuestions.length}</Badge>
                  </ListGroupItem>
                  <ListGroupItem>
                    <MdBubbleChart size={25} color={primaryColor} /> total number of questions{' '}
                     <Badge color="secondary">{questionsNumber}</Badge>
                  </ListGroupItem>
                  <ListGroupItem>
                    <MdShowChart size={25} color={primaryColor} /> form with most questions{' '}
                    <Badge color="secondary">{maxForm}</Badge>
                  </ListGroupItem>
                  <ListGroupItem>
                    <MdPieChart size={25} color={primaryColor} /> form with least questions{' '}
                     <Badge color="secondary">{minForm}</Badge>
                  </ListGroupItem>
                </ListGroup>
          </Card>
      </div>
    ) 
};
const DisplayStat = (props) => {
  const { countQuestions } = props;
  let data = [];
  let x, y;
  {
      countQuestions.map((element) => {
          x = element.formTitle;
          y = element.questionsNumber;
          data.push({ x, y });
    });
  }
  return (
    <div style={{ margin: "auto", width: 350 }}>
      <XYPlot xType="ordinal" height={200} width={350}>
        <HorizontalGridLines />
        <VerticalBarSeries data={data} color={"#33ccff"} />
        <XAxis />
        <YAxis
          style={{
            line: { stroke: "#ADDDE1" },
            text: { stroke: "none", fill: "#6b6b76", fontWeight: 600 },
          }}
        />
      </XYPlot>
    </div>
  );
}
AllFormsQuestionsNumbersStat.propTypes = {
  countQuestions: PropTypes.object.isRequired,
};

DisplayStat.propTypes = {
  countQuestions: PropTypes.object.isRequired,
};

const calculateQuestionsTotalNumber=(countQuestions)=>{
  let questionsNumber=0;
  countQuestions.map((element)=>{
    questionsNumber+=element.questionsNumber
  })
  return questionsNumber
}

const getFormWithMaximumQuestions=(countQuestions)=>{
  let max = {"questionsNumber":0,"formTitle":""};
  countQuestions.map((element)=>{
    if(element.questionsNumber>max.questionsNumber)
    max=element;
  })
return max.formTitle
}

const getFormWithMinimumQuestions=(countQuestions)=>{
  let min ={}
  if(countQuestions.length>0){
    min = {"questionsNumber":countQuestions[0].questionsNumber,"formTitle":countQuestions[0].formTitle};
    countQuestions.map((element)=>{
      if(element.questionsNumber<min.questionsNumber)
      min=element;
    })
  }
  return min.formTitle
}
export default AllFormsQuestionsNumbersStat;
