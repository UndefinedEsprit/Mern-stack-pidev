import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createError } from "../../redux/actions/error";
import {reset} from "../../redux/actions/reset";
import Loading from "./components/loading";
import Page from './components/Page';
import {
  Col,
  Row,
} from 'reactstrap';
import MostActiveUsers from "./components/mostActiveUsers";
import UsersList from "./components/usersList";
import {getMostActiveUsers,getUsers,postUsers} from "../../redux/models/user/actions/users";

function UsersPage(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [browse, setBrowse] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        await props.actions.reset();
        await props.actions.getMostActiveUsers();
        await props.actions.getUsers();
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        throw e; // let caller know the promise was rejected with this reason
      }
    };
    fetchData();
  }, [isUploaded]);
  const onFileChange = event => { 
    setSelectedFile({ selectedFile: event.target.files[0] }); 
  }; 
  const onFileUpload = async() => {  
    await props.actions.postUsers();
    setIsUploaded(!isUploaded);
  }; 
 
  const fileData = () => { 
    if (selectedFile) {   
      return ( 
        <div> 
          <h2>File Details:</h2> 
          <p>File Name: {selectedFile.name}</p> 
          <p>File Type: {selectedFile.type}</p> 
          <p> 
            Last Modified:{" "} 
            {selectedFile.lastModifiedDate.toDateString()} 
          </p> 
        </div> 
      ); 
    } else { 
      return ( 
        <div> 
          <br /> 
          <h4>Choose before Pressing the Upload button</h4> 
        </div> 
      ); 
    } 
  };
  return (
    <div>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
      <Page
        className="UsersPage"
        title="UsersPage"
        breadcrumbs={[{ name: 'UsersPage', active: true }]}
      >
      <Row>
      <Col md="6" sm="12" xs="12">
      <MostActiveUsers
       usersList = {props.mostActiveUsers}
       />
      </Col>
      <Col lg="8" md="12" sm="12" xs="12">
      <input type="file" onChange={onFileChange} /> 
              <button onClick={onFileUpload}> 
                Upload users 
              </button> 
  
      </Col>
      </Row>
     <br/>
     <Row>
     <Col md="6" sm="12" xs="12">
      <UsersList 
       usersList = {props.users}
       />
      </Col>
     </Row>
    
  </Page>
      )}
    </div>
  );
}
UsersPage.propTypes = {
  actions: PropTypes.shape({
    getUsers: PropTypes.func,
    getMostActiveUsers: PropTypes.func,
    postUsers: PropTypes.func,
    reset: PropTypes.func,

    
  }),
};
export const mapStateToProps = (state) => {
  const mostActiveUsers = Object.values(state.mostActiveUsers);
  const users = Object.values(state.users);
  return { users,mostActiveUsers};
};

export const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        createError,
        reset,
        getMostActiveUsers,
        getUsers,
        postUsers
      },
      dispatch
    ),
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
