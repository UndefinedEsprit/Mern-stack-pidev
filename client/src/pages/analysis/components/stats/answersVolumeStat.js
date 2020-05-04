import PropTypes from "prop-types";
import React from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalBarSeries,
  LabelSeries,
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

const DisplayStat = (props) => {
  const {answersVolume} = props;
  console.log("stat");
  console.log(answersVolume);
  let data = [];
  let x, y;
  {
    answersVolume.map((element) => {
      console.log("element");
  console.log(element);
          x = element.answer;
          y = element.volume;
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
          title="chosen times"
          style={{
            line: { stroke: "#ADDDE1" },
            text: { stroke: "none", fill: "#6b6b76", fontWeight: 600 },
          }}
        />
      </XYPlot>
    </div>
  );
}
const answersVolumeStat = (props) => {
  const primaryColor = getColor('primary');
  return (
      <div>
          <Card>
            <CardHeader>chosen answers</CardHeader>
            <CardBody>
            {props.isAnswered ? (
               <DisplayStat
               answersVolume={props.answersVolume}
               />
            ) : (            
             <div>no responses found for this question</div>
            )}

              </CardBody>
                <ListGroup flush>
                  <ListGroupItem>
                    <MdInsertChart size={25} color={primaryColor} /> total number of studies{' '}
                    <Badge color="secondary">3</Badge>
                  </ListGroupItem>
                  <ListGroupItem>
                    <MdBubbleChart size={25} color={primaryColor} /> total number of forms
                    costs <Badge color="secondary">4</Badge>
                  </ListGroupItem>
                  <ListGroupItem>
                    <MdShowChart size={25} color={primaryColor} /> Financial costs{' '}
                    <Badge color="secondary">2</Badge>
                  </ListGroupItem>
                  <ListGroupItem>
                    <MdPieChart size={25} color={primaryColor} /> Other operating
                    costs <Badge color="secondary">0</Badge>
                  </ListGroupItem>
                </ListGroup>
          </Card>
      </div>
    ) 
};

answersVolumeStat.propTypes = {
  answersVolume: PropTypes.object.isRequired,
  isAnswered : PropTypes.object.isRequired,
};
DisplayStat.propTypes = {
  answersVolume: PropTypes.object.isRequired,
};
export default answersVolumeStat;
