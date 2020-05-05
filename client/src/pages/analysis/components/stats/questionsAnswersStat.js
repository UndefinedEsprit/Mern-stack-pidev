import React from 'react';
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
  const primaryColor = getColor('primary');
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
  const DisplayStat = (props) => {
    let statData = [];
  let x, y;
  {
    props.numberOfAnswers.map((element) => {
      console.log("element");
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
  

  
  export default QuestionsAnswsersStat;