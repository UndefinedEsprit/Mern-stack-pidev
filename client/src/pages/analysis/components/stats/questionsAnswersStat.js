import React ,{useEffect, useState} from 'react';
import PropTypes from 'prop-types';
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

const QuestionsAnswsersStat = props => {
  const [responsesNumber, setResponsesNumber] = useState();
  const [maxQuestion, setMaxQuestion] = useState();
  const [minQuestion, setMinQuestion] = useState();
  const [primaryColor, setPrimaryColor] = useState();
  useEffect(() => {
    setResponsesNumber(calculateResponsesTotalNumber(props.numberOfAnswers));
    setMaxQuestion(getQuestionWithMaximumResponses(props.numberOfAnswers));
    setMinQuestion(getQuestionWithMinimumResponses(props.numberOfAnswers));
    setPrimaryColor(getColor('primary'));
  },[]);
  return (
      <div>
          <Card>
            <CardHeader>Answers per Questions</CardHeader>
            <CardBody>
              <DisplayStat
                numberOfAnswers={props.numberOfAnswers}
                />
              </CardBody>
                <ListGroup flush>
                  <ListGroupItem>
                    <MdInsertChart size={25} color={primaryColor} /> total number of questions{' '}
                    <Badge color="secondary">{props.numberOfAnswers.length}</Badge>
                  </ListGroupItem>
                  <ListGroupItem>
                    <MdBubbleChart size={25} color={primaryColor} /> total number of responses {' '}
                      <Badge color="secondary">{responsesNumber}</Badge>
                  </ListGroupItem>
                  <ListGroupItem>
                    <MdShowChart size={25} color={primaryColor} /> question with most responses{' '}
                    <Badge color="secondary">{maxQuestion}</Badge>
                  </ListGroupItem>
                  <ListGroupItem>
                    <MdPieChart size={25} color={primaryColor} /> question with least responses{' '}
                     <Badge color="secondary">{minQuestion}</Badge>
                  </ListGroupItem>
                </ListGroup>
          </Card>
      </div>
  ) 
};
const DisplayStat = (props) => {
    let statData = [];
  let x, y;
  {
    props.numberOfAnswers.map((element) => {
          x = element.questionText;
          y = element.numberOfAnswers;
          statData.push({ x, y });
    });
  }                                                                       
  return(
    <div style={{ margin: "auto", width: 350 }}>
    <XYPlot xType="ordinal" height={200} width={350}>
      <HorizontalGridLines />
      <VerticalBarSeries data={statData} color={"#33ccff"}/>
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
QuestionsAnswsersStat.propTypes = {
    numberOfAnswers: PropTypes.object.isRequired
};
DisplayStat.propTypes = {
    numberOfAnswers: PropTypes.object.isRequired
};
  
  const calculateResponsesTotalNumber=(numberOfAnswers)=>{
    let responsesNumber=0;
    numberOfAnswers.map((element)=>{
      responsesNumber+=element.numberOfAnswers
    })
    return responsesNumber
  }
  
  const getQuestionWithMaximumResponses=(numberOfAnswers)=>{
    let max = {"numberOfAnswers":0," questionText":""};
    numberOfAnswers.map((element)=>{
      if(element.numberOfAnswers>max.numberOfAnswers)
      max=element;
    })
  return max.questionText
  }
  
  const getQuestionWithMinimumResponses=(numberOfAnswers)=>{
    let min ={}
    if(numberOfAnswers.length>0){
      min = {"numberOfAnswers":numberOfAnswers[0].numberOfAnswers,"questionText":numberOfAnswers[0].questionText};
      numberOfAnswers.map((element)=>{
        if(element.numberOfAnswersr<min.numberOfAnswers)
        min=element;
      })
    }
    return min.questionText
  }
  
export default QuestionsAnswsersStat;