import PropTypes from "prop-types";
import React ,{useEffect, useState} from "react";
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

const AnswersVolumeStat = props => {
  const [responsesNumber, setResponsesNumber] = useState();
  const [maxAnswer, setMaxAnswer] = useState();
  const [minAnswer, setMinAnswer] = useState();
  const [primaryColor, setPrimaryColor] = useState();
  useEffect(() => {
   setResponsesNumber(calculateResponsesTotalNumber(props.answersVolume));
    setMaxAnswer(getAnswerWithMaximumResponses(props.answersVolume));
    setMinAnswer(getAnswerWithMinimumResponses(props.answersVolume));
    setPrimaryColor(getColor('primary'));
  },[]);
  return (
    <div>
        <Card>
          <CardHeader>chosen answers</CardHeader>
          <CardBody>
            {props.isAnswered ? (
              <div>
                <DisplayStat
                answersVolume={props.answersVolume}
                />
                <ListGroup flush>
                  <ListGroupItem>
                    <MdInsertChart size={25} color={primaryColor} /> total number of answers{' '}
                    <Badge color="secondary">{props.answersVolume.length}</Badge>
                  </ListGroupItem>
                  <ListGroupItem>
                    <MdBubbleChart size={25} color={primaryColor} /> total number of responses {' '}
                    <Badge color="secondary">{responsesNumber}</Badge>
                  </ListGroupItem>
                  <ListGroupItem>
                    <MdShowChart size={25} color={primaryColor} /> most chosen answer {' '}
                    <Badge color="secondary">{maxAnswer}</Badge>
                  </ListGroupItem>
                  <ListGroupItem>
                    <MdPieChart size={25} color={primaryColor} /> least chosen answer {' '}
                    <Badge color="secondary">{minAnswer}</Badge>
                  </ListGroupItem>
                </ListGroup>
              </div>
            ) : (            
             <div>no responses found for this question</div>
            )}
          </CardBody>     
        </Card>
    </div>
  ) 
};

const DisplayStat = (props) => {
  const {answersVolume} = props;
  let data = [];
  let x, y;
  {
    answersVolume.map((element) => {
          x = element._id;
          y = element.count;
          data.push({ x, y });
    });
  }
  return (
    <div style={{ margin: "auto", width: 350 }}>
      <XYPlot xType="ordinal" height={200} width={350}>
        <HorizontalGridLines />
        <VerticalBarSeries data={data} color={"#33ccff"}/>
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
AnswersVolumeStat.propTypes = {
  answersVolume: PropTypes.object.isRequired,
  isAnswered : PropTypes.object.isRequired,
};
DisplayStat.propTypes = {
  answersVolume: PropTypes.object.isRequired,
};
const calculateResponsesTotalNumber=(answersVolume)=>{
  let responsesNumber=0;
  answersVolume.map((element)=>{
    responsesNumber+=element.count
  })
  return responsesNumber
}

const getAnswerWithMaximumResponses=(answersVolume)=>{
  let max = {"count":0,"_id":""};
  answersVolume.map((element)=>{
    if(element.count>max.count)
    max=element;
  })
return max._id;
}

const getAnswerWithMinimumResponses=(answersVolume)=>{
  let min ={}
  if(answersVolume.length>0){
    min = {"count":answersVolume[0].count,"_id":answersVolume[0]._id};
    answersVolume.map((element)=>{
      if(element.count<min.count)
      min=element;
    })
  }
  return min._id
}
export default AnswersVolumeStat;
