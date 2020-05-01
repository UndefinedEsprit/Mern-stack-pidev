
import React from 'react';
import {
    MdThumbUp
  } from 'react-icons/md';
  import {
    AiOutlinePercentage,
    AiFillDatabase
  } from 'react-icons/ai';
import {CardGroup} from 'reactstrap';
  import { IconWidget } from './Widget';

function QuestionsTypesBrief() {
   
    return (
        <div>
             <CardGroup style={{ marginBottom: '1rem' }}>
      <IconWidget
        bgColor="white"
        inverse={false}
        icon={AiOutlinePercentage}
        title="50"
        subtitle="rating questions"
      />
      <IconWidget
        bgColor="white"
        inverse={false}
        icon={AiFillDatabase}
        title="10"
        subtitle="multiple questions"
      />
      <IconWidget
        bgColor="white"
        inverse={false}
        icon={MdThumbUp}
        title="30"
        subtitle="yes/no questions"
      />
    </CardGroup>
        </div>
    ) 
}


export default QuestionsTypesBrief;