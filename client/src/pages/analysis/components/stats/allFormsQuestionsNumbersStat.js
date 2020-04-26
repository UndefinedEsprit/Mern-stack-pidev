
import PropTypes from 'prop-types';
import React from 'react';
//import "~react-vis/dist/style";
//import "~react-vis/dist/styles/legends";
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalBarSeries,LabelSeries} from 'react-vis';


const AllFormsQuestionsNumbersStat = props => {
  const { countQuestions,forms} = props;
  let data = [];
  let i=1;
  let x ,y;
  {forms.map(form =>  
    {countQuestions.map(element =>{
      if (element.formId == form._id){
        x=form.title;
        y=element.questionsNumber;
        data.push({x,y});        
      }                                            
    })}                             
  )}
    return(
<XYPlot  xType="ordinal" height={200} width={500}margin={{
    left: 175
  }}>
     <HorizontalGridLines />
  <VerticalBarSeries data={data} />
  <XAxis/>
  <YAxis title="number of questions"style={{
  line: {stroke: '#ADDDE1'},
  text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
}}/>
</XYPlot>
    );
};

AllFormsQuestionsNumbersStat.propTypes = {
    forms: PropTypes.object.isRequired,
    countQuestions: PropTypes.object.isRequired
};


export default AllFormsQuestionsNumbersStat;