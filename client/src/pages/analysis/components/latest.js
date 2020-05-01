import React from 'react';
import { getColor } from '../utils/colors';
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardDeck,
    CardGroup,
    CardHeader,
    CardTitle,
    Col,
    ListGroup,
    ListGroupItem,
    Row,
  } from 'reactstrap';
  import {
    MdBubbleChart,
    MdInsertChart,
    MdPersonPin,
    MdPieChart,
    MdRateReview,
    MdShare,
    MdShowChart,
    MdThumbUp,
  } from 'react-icons/md';
function Latest() {
    const primaryColor = getColor('primary');
    return (
        <div>
            <Card>
          <CardHeader>Latest</CardHeader>
          <ListGroup flush>
            <ListGroupItem>
              <MdInsertChart size={25} color={primaryColor} /> Latest study{' '}
              <Badge color="secondary">thiss study</Badge>
            </ListGroupItem>
            <ListGroupItem>
              <MdBubbleChart size={25} color={primaryColor} /> Latest form
              <Badge color="secondary">this form</Badge>
            </ListGroupItem>
            <ListGroupItem>
              <MdShowChart size={25} color={primaryColor} /> Latest user response{' '}
              <Badge color="secondary">this answer</Badge>
            </ListGroupItem>
            <ListGroupItem>
              <MdPieChart size={25} color={primaryColor} /> Latest user
               <Badge color="secondary">this user</Badge>
            </ListGroupItem>
          </ListGroup>
        </Card>
        </div>
    ) 
}


export default Latest;