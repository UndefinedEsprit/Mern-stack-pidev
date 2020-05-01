import PropTypes from "prop-types";
import React from "react";
import { getColor } from '../../utils/colors';
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

const DisplayStat = (props) => {
    const { countForms } = props;
    let data = [];
    let x, y;
    countForms.map((element) => {
        x = element.studyName;
        y = element.formsNumber;
        data.push({ x, y });
    })
  return (
    <div style={{ margin: "auto", width: 350 }}>
      <XYPlot xType="ordinal" height={200} width={350}>
        <HorizontalGridLines />
        <VerticalBarSeries data={data} color={"#33ccff"}/>
        <XAxis />
        <YAxis
          style={{
            line: { stroke: " #000000" },
            text: { stroke: "none", fill: "#6b6b76", fontWeight: 600 },
          }}
        />
      </XYPlot>
    </div>
  );
};

DisplayStat.propTypes = {
  countForms: PropTypes.object.isRequired,
};
const FormsNumberStat= (props) => {
  const primaryColor = getColor('primary');
  return (
      <div>
          <Card>
<CardHeader>number of forms per study</CardHeader>
<CardBody>
<DisplayStat
  countForms={props.countForms}
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
}
FormsNumberStat.propTypes = {
  countForms: PropTypes.object.isRequired,
};
export default FormsNumberStat;
