import React from 'react';
import PropTypes from 'prop-types';
import {RadialChart} from 'react-vis';
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

const QuestionsTypesStat = props => {
  const primaryColor = getColor('primary');
  return (
      <div>
          <Card>
            <CardHeader>questions types</CardHeader>
            <CardBody>
              <DisplayStat
                questions={props.questions}
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
    const {questions} = props;
    let statData = [];
    let angle,subLabel ,label;
    let typessMap=calculateTypesVolume(questions);
    typessMap.map(element =>{
      angle=element.volume;
      label=element.type;
      subLabel=element.volume;
      statData.push({"angle":angle,"label":label,"subLabel":subLabel})
    })                                                                          
  return(
    <RadialChart
    data={statData}
    width={300}
    height={300}
    showLabels
    labelsStyle={{
      fontSize: 12,
      fontFamily: "Arial",
      fontWeight: "bold",
      letterSpacing: 0.4
    }} />
    );
  }
  QuestionsTypesStat.propTypes = {
    questions: PropTypes.object.isRequired
  };
  DisplayStat.propTypes = {
    questions: PropTypes.object.isRequired
  };
  
  function calculateTypesVolume(questions){
    let typesList=[];
    let typesMap =[];
    questions.map(element =>{
        if ( typesList.includes(element.type) ){
            typesMap.map(e =>{
            if(e.type==element.type)
              e.volume++;
          })
        }
        else{
            typesList.push(element.type);
            typesMap.push({"type":element.type,"volume":1})
        }
    });
    return typesMap;
  }
  
  export default QuestionsTypesStat;