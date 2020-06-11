import PropTypes, { element } from "prop-types";
import React ,{useEffect} from 'react';
import jsPDF from "jspdf";
import "jspdf-autotable";
import {
    Card,
    CardBody,
    CardHeader
  } from 'reactstrap';
  import UserProgressTable from './UserProgressTable';




  function exportPDF(usersListData) {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);
    const headers=Object.keys(usersListData[0]);
    const bodyList=[];
    usersListData.map((element)=>{
        let bodyElement= Object.values(element);
        bodyList.push({ ...bodyElement }); 
    })
    const title = "Most Active Users";
    let content = {
        startY: 50,
        head:[headers],
        body: bodyList
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("report.pdf")
  }



const UsersList= (props) => { 
    const {usersList} = props;
        
    let usersListData=[];
    usersList.map((user)=>{
        usersListData.push({email:user.email,age:user.age,address:user.address});
    }) 
    return (
            <Card>
                <CardHeader>Most Active Users </CardHeader>
                <CardBody>
                    <UserProgressTable
                        headers={[
                            'email',
                            'age',
                            'address',
                        ]}
                        usersData={usersListData}
                    />
                </CardBody>
                <button onClick={()=>exportPDF(usersListData)}>Generate Report</button>
            </Card>
    ) 
}
UsersList.propTypes = {
    usersList: PropTypes.object.isRequired,
};

export default UsersList;