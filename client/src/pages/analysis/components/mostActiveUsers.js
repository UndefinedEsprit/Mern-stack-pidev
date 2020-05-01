
import React from 'react';
import {
    Card,
    CardBody,
    CardHeader
  } from 'reactstrap';
  import UserProgressTable from './UserProgressTable';

function MostActiveUsers() {
   
    return (
        <div>
            <Card>
                <CardHeader>Most Active Users </CardHeader>
                <CardBody>
                    <UserProgressTable
                        headers={[
                            'email',
                            'age',
                            'address',
                            'participation',
                        ]}
                        usersData={[{email:"dhia@esprit.tn",age:25,address:"kef",participation:5},{email:"mahdi@esprit.tn",age:24,address:"gafsa",participation:2}]}
                    />
                </CardBody>
            </Card>
        </div>
    ) 
}


export default MostActiveUsers;