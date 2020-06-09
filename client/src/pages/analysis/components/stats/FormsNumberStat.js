import PropTypes from "prop-types";
import React,{useEffect, useState} from "react";
import { getColor } from '../../utils/colors';
import jsPDF from "jspdf";
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

function exportPDF() {
  const unit = "pt";
  const size = "A4"; // Use A1, A2, A3 or A4
  const orientation = "portrait"; // portrait or landscape

  const marginLeft = 40;
  const doc = new jsPDF(orientation, unit, size);

  doc.setFontSize(15);
  const title = "Most Active Users";
  doc.text(<div>a</div>);
  doc.save("report.pdf")
}

const DisplayStat = (props) => {
  const { countForms } = props;
  const primaryColor = getColor('primary');
    
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
          line: { stroke: "#ADDDE1" },
          text: { stroke: "none", fill: "#6b6b76", fontWeight: 600 },
        }}
      />
    </XYPlot>
  </div>
      )
    }


DisplayStat.propTypes = {
  countForms: PropTypes.object.isRequired,
};
const FormsNumberStat=(props) => {
    const [formsNumber, setFormsNumber] = useState();
    const [maxStudy, setMaxStudy] = useState();
    const [minStudy, setMinStudy] = useState();
    const [primaryColor, setPrimaryColor] = useState();
    useEffect(() => {
      setFormsNumber(calculateFormsTotalNumber(props.countForms ));
      setMaxStudy(getStudyWithMaximumForms(props.countForms));
      setMinStudy(getStudyWithMinimumForms(props.countForms));
      setPrimaryColor(getColor('primary'));
    },[]);
    
    
  return ( <div>
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
  <Badge color="secondary">{props.countForms.length}</Badge>
  </ListGroupItem>
  <ListGroupItem>
  <MdBubbleChart size={25} color={primaryColor} /> total number of forms {' '}
  <Badge color="secondary">{formsNumber}</Badge>
  </ListGroupItem>
  <ListGroupItem>
  <MdShowChart size={25} color={primaryColor} /> study with most forms{' '}
  <Badge color="secondary">{maxStudy}</Badge>
  </ListGroupItem>
  <ListGroupItem>
  <MdPieChart size={25} color={primaryColor} /> study with least forms{' '}
  costs <Badge color="secondary">{minStudy}</Badge>
  </ListGroupItem>
  </ListGroup>
  
  </Card>
  </div>
  <button onClick={()=>exportPDF()}>Generate Report</button>
  </div>
)
 
}
FormsNumberStat.propTypes = {
  countForms: PropTypes.object.isRequired,
};

const calculateFormsTotalNumber=(countForms)=>{
  let formsNumber=0;
  countForms.map((element)=>{
    formsNumber+=element.formsNumber
  })
  return formsNumber
}

const getStudyWithMaximumForms=(countForms)=>{
  let max = {"formsNumber":0,"studyName":""};
  countForms.map((element)=>{
    if(element.formsNumber>max.formsNumber)
    max=element;
  })
return max.studyName
}

const getStudyWithMinimumForms=(countForms)=>{
  let min ={}
  if(countForms.length>0){
    min = {"formsNumber":countForms[0].formsNumber,"studyName":countForms[0].studyName};
    countForms.map((element)=>{
      if(element.formsNumber<min.formsNumber)
      min=element;
    })
  }
  return min.studyName
}

export default FormsNumberStat;
