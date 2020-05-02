import PropTypes from "prop-types";
import React from "react";
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
  const primaryColor = getColor('primary');
  return (
      <div>
          <Card>
            <CardHeader>number of questions per form</CardHeader>
            <CardBody>
              <DisplayStat
                forms={props.forms}
                countQuestions={props.countQuestions}
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
  const { countQuestions, forms } = props;
  let data = [];
  let x, y;
  {
    forms.map((form) => {
      countQuestions.map((element) => {
        if (element.formId == form._id) {
          x = form.title;
          y = element.questionsNumber;
          data.push({ x, y });
        }
      });
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
  forms: PropTypes.object.isRequired,
  countQuestions: PropTypes.object.isRequired,
};

DisplayStat.propTypes = {
  forms: PropTypes.object.isRequired,
  countQuestions: PropTypes.object.isRequired,
};

export default AllFormsQuestionsNumbersStat;
