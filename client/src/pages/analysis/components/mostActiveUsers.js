import PropTypes from "prop-types";
import React from 'react';
import {
    Card,
    CardBody,
    CardHeader
  } from 'reactstrap';
  import UserProgressTable from './UserProgressTable';

const MostActiveUsers= (props) => { 
    const {usersList} = props;
    let usersListData=[];
    usersList.map((user)=>{
        usersListData.push({email:user.email,age:user.age,address:user.address,participation:user.participation});
    })   
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
                        usersData={usersListData}
                    />
                </CardBody>
            </Card>
        </div>
    ) 
}
MostActiveUsers.propTypes = {
    usersList: PropTypes.object.isRequired,
};

export default MostActiveUsers;