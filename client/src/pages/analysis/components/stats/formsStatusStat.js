import React from "react";
import PropTypes from "prop-types";
import { RadialChart } from "react-vis";
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

const FormsStatusStat = (props) => {
  const primaryColor = getColor('primary');
  console.log(props.formsStatus);
  return (
      <div>
          <Card>
            <CardHeader>forms status</CardHeader>
            <CardBody>
              <DisplayStat
                formsStatus={props.formsStatus}
                />
              </CardBody>
                <ListGroup flush>
                  <ListGroupItem>
                    <MdInsertChart size={25} color={primaryColor} /> total number of forms{' '}
                    <Badge color="secondary">{props.formsStatus.length}</Badge>
                  </ListGroupItem>
                </ListGroup>
          </Card>
      </div>
    ) 
};

function calculateStautsVolume(formsStatus) {
  let statusList = [];
  let statusMap = [];
  formsStatus.map((element) => {
    if (statusList.includes(element.status)) {
      statusMap.map((e) => {
        if (e.status == element.status) e.volume++;
      });
    } else {
      statusList.push(element.status);
      statusMap.push({ status: element.status, volume: 1 });
    }
  });
  return statusMap;
}
const DisplayStat = (props) => {
  const { formsStatus } = props;
  let statData = [];
  let angle, subLabel, label;
  let statusMap = calculateStautsVolume(formsStatus);
  statusMap.map((element) => {
    angle = element.volume;
    label = element.status;
    subLabel = element.volume;
    statData.push({ angle: angle, label: label, subLabel: subLabel });
  });
  return (
    <div style={{ margin: "auto", width: 300 }}>
      <RadialChart
        data={statData}
        width={300}
        height={300}
        margin={"auto"}
        showLabels
        labelsStyle={{
          fontSize: 12,
          fontFamily: "Arial",
          fontWeight: "bold",
          letterSpacing: 0.4,
        }}
      />
    </div>
  );
}
FormsStatusStat.propTypes = {
  formsStatus: PropTypes.object.isRequired,
};
DisplayStat.propTypes = {
  formsStatus: PropTypes.object.isRequired,
};

export default FormsStatusStat;
