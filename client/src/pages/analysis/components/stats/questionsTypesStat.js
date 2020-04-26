import React from 'react';
import PropTypes from 'prop-types';
import {RadialChart} from 'react-vis';

const QuestionsTypesStat = props => {
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
  };
  
  QuestionsTypesStat.propTypes = {
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