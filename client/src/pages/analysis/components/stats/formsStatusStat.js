import React from 'react';
import PropTypes from 'prop-types';
import {RadialChart} from 'react-vis';

const FormsStatusStat = props => {
    const { formsStatus} = props;
    let statData = [];
    let angle,subLabel ,label;
    let statusMap=calculateStautsVolume( formsStatus);
    statusMap.map(element =>{
      angle=element.volume;
      label=element.status;
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
  
  FormsStatusStat.propTypes = {
      formsStatus: PropTypes.object.isRequired
  };
  
  function calculateStautsVolume(formsStatus){
    let statusList=[];
    let statusMap =[];
    formsStatus.map(element =>{
        if ( statusList.includes(element.status) ){
          statusMap.map(e =>{
            if(e.status==element.status)
              e.volume++;
          })
        }
        else{
          statusList.push(element.status);
          statusMap.push({"status":element.status,"volume":1})
        }
    });
    return statusMap;
  }
  
  export default FormsStatusStat;